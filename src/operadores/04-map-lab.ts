import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div') as HTMLDivElement;

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis libero ac turpis lobortis, vitae bibendum nunc auctor. Donec in ligula quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sed magna non est molestie iaculis. Ut vitae molestie massa. Integer vel elementum felis. Aliquam sodales nisl in turpis aliquam commodo. Suspendisse auctor tortor in interdum faucibus. Nunc quis est vel ipsum sodales cursus. Ut facilisis nisl quis quam tristique dictum et non augue. Aliquam lectus velit, facilisis consectetur diam quis, ultrices aliquet quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel iaculis mauris. Proin ullamcorper non tellus eget laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/>
<br/>
Donec pharetra suscipit egestas. Donec nec odio blandit, consequat tellus eu, ornare est. Aenean vestibulum, erat bibendum pellentesque tempor, lorem ex facilisis augue, nec fringilla ligula turpis sed massa. Nam vehicula in elit in mattis. Ut libero eros, eleifend a dapibus vel, scelerisque a justo. Vivamus lacinia dolor non nunc ultrices iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis blandit nisl ut augue ullamcorper, in pharetra justo mattis. Donec in pellentesque massa, at luctus justo. Integer at tellus sed sem iaculis tincidunt. Nulla vulputate varius mi quis luctus. Nulla facilisi. Donec ac nisl elit.
<br/>
<br/>
Pellentesque maximus dapibus lectus vel scelerisque. Quisque porttitor, nisi vel fermentum luctus, neque nibh porta lorem, sit amet auctor sapien justo non nisi. Duis vitae orci interdum, volutpat lectus quis, porta lectus. In hac habitasse platea dictumst. Donec molestie tempor diam, vel pretium purus dapibus vitae. Integer rhoncus sodales orci in pulvinar. Pellentesque suscipit massa ligula, sit amet volutpat turpis congue ac. Morbi sagittis risus id leo tincidunt blandit pretium vel neque. Suspendisse ut lorem augue. Ut in velit eleifend ligula rutrum dictum.
<br/>
<br/>
Morbi ornare magna sit amet orci dictum, a laoreet urna finibus. Integer pellentesque viverra hendrerit. Morbi ut sodales lorem. Etiam convallis imperdiet ipsum. Mauris id mauris ante. Integer aliquam imperdiet massa. Praesent bibendum ligula ut mollis convallis. Maecenas vitae massa gravida, faucibus ex sollicitudin, malesuada orci. Praesent rutrum suscipit neque quis congue. Suspendisse ullamcorper tempus metus, id iaculis tellus commodo quis. Phasellus consectetur, turpis quis semper commodo, neque quam rutrum magna, in rutrum lorem arcu ac massa. In a urna massa. Nam accumsan felis mauris, at mollis massa auctor vel.
<br/>
<br/>
Nunc laoreet, eros in sagittis bibendum, tortor magna malesuada sapien, vel lacinia sem arcu sit amet mi. Nulla gravida mauris eu justo ultrices, eget venenatis dolor rhoncus. Nullam volutpat tristique metus, ac fringilla justo commodo vel. Nunc non consectetur ex, eget blandit nisi. Quisque quam ligula, egestas in est a, porta ultrices libero. Maecenas dignissim consectetur quam et viverra. Fusce blandit malesuada nulla vitae rutrum. Donec sit amet consequat erat. Etiam at metus quis sapien maximus venenatis ac ut sapien. Ut sit amet risus mi. In tincidunt nunc massa, quis dignissim nunc dictum in. Etiam dapibus mi sed augue pellentesque posuere.
`;

const body = document.querySelector('body') as HTMLBodyElement;
body.append(texto);

const progressBar = document.createElement('div') as HTMLDivElement;
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// función que haga el cálculo
const calcularPorcentajeScroll = (event: any) => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = event.target.documentElement;
    // console.log({ scrollHeight, scrollTop, clientHeight });

    return (scrollTop / (scrollHeight - clientHeight)) * 100;

};

// Stream
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(event => calcularPorcentajeScroll(event)),
    tap(console.log) // imprime el porcentaje del scroll
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});