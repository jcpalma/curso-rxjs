import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);


numeros$
    .pipe(
        tap(n => console.log('[tap:1]', n)),
        map(n => n * 10),
        tap({
            next: n => console.log('tap:2', n),
            complete: () => console.log('[complete]')
        })
    )
    .subscribe(n => console.log('[subs]', n));