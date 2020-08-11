import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';
import { } from 'rxjs/ajax';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// encola los intervalos (secuencia).
click$
    .pipe(
        concatMap(() => interval$)
    )
    .subscribe(console.log);