import { interval, timer } from 'rxjs';


const observer = {
    next: (value: any) => console.log('[next]:', value),
    complete: () => console.log('[completed]')
};

const interval$ = interval(1000);
// inicia después de 2 segundo, y se repite cada segundo (similiar al interva)
// const timer$ = timer(2000, 1000);
// const timer$ = timer(2000);

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
// se ejecutará 5 segundos después.
const timer$ = timer(hoyEn5);

console.info('%c#Inicio', 'color:DodgerBlue');
// src$.subscribe(console.log);
timer$.subscribe(observer);
console.info('%c#Fin', 'color:DodgerBlue');