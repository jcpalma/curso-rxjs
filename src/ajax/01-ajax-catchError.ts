import { of } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (resp: Response) => {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp;
};

const atrapaError = (err: AjaxError) => {
    console.warn('[Error]:', err.message);
    return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('[data]', data))
//     .catch(err => console.warn('[error]', err));


// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('[data]', data))
//     .catch(err => console.warn('[error]', err));

ajax(url).pipe(pluck('response'), catchError(atrapaError))
    .subscribe(users => console.log('[users]', users));