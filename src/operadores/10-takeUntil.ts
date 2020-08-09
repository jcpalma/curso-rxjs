import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener';
document.querySelector('body')?.append(boton);

const counter$ = interval(1000);
const click$ = fromEvent(boton, 'click');

// el counter$ se completa cuando se hace click en el boton.
counter$
    .pipe(takeUntil(click$))
    .subscribe({
        next: value => console.log('[next]', value),
        complete: () => console.log('[complete]')
    });