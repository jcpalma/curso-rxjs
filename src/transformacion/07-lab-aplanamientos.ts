import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

interface Credenciales {
    email: string;
    password: string;
}

// Helper
const peticionHttpLogin = (credenciales: Credenciales) =>
    ajax.post('https://reqres.in/api/login?delay=1', credenciales)
        .pipe(
            pluck('response', 'token'),
            catchError(err => of({}))
        );



// Creando un formulario
const form = document.createElement('form');
const inputMail = document.createElement('input');
const inputPass = document.createElement('input');
const btnSubmit = document.createElement('button');

//Configuraciones
inputMail.type = 'email';
inputMail.placeholder = 'email';
inputMail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Ingresar';

form.append(inputMail, inputPass, btnSubmit);
document.querySelector('body')?.append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(event => event.preventDefault()),
        map<any, Credenciales>((event: any) => ({
            email: event.target[0]?.value,
            password: event.target[1]?.value
        })),
        // mergeMap(peticionHttpLogin)
        // switchMap(peticionHttpLogin)
        exhaustMap(peticionHttpLogin)
    );

submitForm$.pipe().subscribe(console.log);