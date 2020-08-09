import { fromEvent, pipe } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.
    pipe(
        map(({ clientX, clientY }) => ({ clientX, clientY })),
        tap((el) => console.log('[click]', el)),
        first(({ clientY }) => clientY >= 150)
    )
    .subscribe({
        next: event => console.log('[next]', event),
        complete: () => console.log('[complete]')
    });