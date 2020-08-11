import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { } from 'rxjs/ajax';

const interval$ = interval(500);


concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    interval$.pipe(take(5)),
    of('Hola')
).subscribe(console.log);