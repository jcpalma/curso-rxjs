import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbinxx.org/delay/1';

const manejarError = (err: AjaxError) => {
    console.warn('[manejarError]', err.message);
    return of({ ok: false, users: [] });
};

// const json$ = ajax.getJSON(url).pipe(catchError(manejarError));
// const ajax$ = ajax(url).pipe(catchError(manejarError));
// json$.subscribe(console.log);
// ajax$.subscribe(console.log);


const json$ = ajax.getJSON(url);
const ajax$ = ajax(url);

json$
    .pipe(catchError(manejarError))
    .subscribe({
        next: data => console.log('[next]', data),
        error: err => console.warn('[error]', err),
        complete: () => console.log('[complete]')
    });
// ajax$.subscribe(console.log);
