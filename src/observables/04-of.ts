import { of } from 'rxjs';


// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of<number[]>([1, 2, 3, 5]);
// const obs$ = of<number>(...[1, 2, 3, 4, 5], 6, 7, 8, 9);
const obs$ = of(
    [1, 2],
    { a: 10, b: 20 },
    function () { },
    true,
    Promise.resolve(true)
);


console.log('Inicio del obs$');
obs$.subscribe(
    value => console.log('[next]: ', value),
    null,
    () => console.log('[completed]')
);
console.log('Fin del obs$');