import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');



// colocar el operador sample
click$
    .pipe(
        sampleTime(2000),
        map(({ x, y }) => ({ x, y })),
    )
    .subscribe(console.log);