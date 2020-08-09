import { from, fromEvent, pipe } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');


click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        // takeWhile(({ y }) => y <= 150),
        takeWhile(({ y }) => y <= 150, true)
    )
    .subscribe({
        next: event => console.log('[next]', event),
        complete: () => console.log('[complete]')
    });