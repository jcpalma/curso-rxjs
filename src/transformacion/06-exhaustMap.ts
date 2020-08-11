import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
import { } from 'rxjs/ajax';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// sólo mantiene una suscripción activa, si recibe otra suscripción
// mientras hay una activa, cancela las nuevas suscripciones.
click$
    .pipe(
        exhaustMap(() => interval$)
    )
    .subscribe(console.log);