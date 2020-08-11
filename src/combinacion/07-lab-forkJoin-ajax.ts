import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'jcpalma';

// forkJoin({
//     usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
//     repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/reposx`),
//     gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),

// })
//     .pipe(catchError(err => of(err.message)))
//     .subscribe(console.log);


forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`)
        .pipe(catchError(err => of({}))),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`)
        .pipe(catchError(err => of([]))),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
        .pipe(catchError(err => of([]))),

}).subscribe(console.log);