import { fromEvent, pipe } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        tap(evento => console.log('[tap]', evento)),
        auditTime(2000))
    .subscribe(console.log);