import { of, from, Observer, Observable } from 'rxjs';

/**
 * of = genera una secuencia según sus argumentos.
 * from =  genera una secuencia de un array, promise, iterable, observable
 */

const observer: Observer<any> = {
    next: value => console.log('[next]', value),
    error: err => { },
    complete: () => console.info('[completed]')
};

// const src$ = of(...[1, 2, 3, 4, 5]);
// const src$ = from([1, 2, 3, 4, 5]);
// const src$ = from('José Palma');


// src$.subscribe(observer);

const src$ = from(fetch('https://api.github.com/users/jcpalma'));

src$.subscribe(async (resp) => {
    // console.log(resp);
    //const data = await resp.json();
    //console.log(data);

});


const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const iterable = miGenerador();
from(iterable).subscribe(observer);