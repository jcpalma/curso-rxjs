import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener';
document.querySelector('body')?.append(boton);

const counter$ = interval(1000);
const click$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('[tap] antes del skip')),
    skip(1),
    tap(() => console.log('[tap] desués del skip'))
);

// el counter$ se completa cuando se hacen 2 clicks en el boton.
counter$
    .pipe(takeUntil(click$))
    .subscribe({
        next: value => console.log('[next]', value),
        complete: () => console.log('[complete]')
    });