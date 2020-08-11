import { } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Cargando...';
const body = document.querySelector('body');


ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe(resp => {
        if (resp === true) {
            body?.append(loading);
        } else {
            document.querySelector('.loading')?.remove();
        }
        console.log(resp);
    });