import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const src$ = range(1, 5, asyncScheduler);

console.info('%c#Inicio', 'color:DodgerBlue');
src$.subscribe(console.log);
console.info('%c#Fin', 'color:DodgerBlue');

