import { range, interval, of, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { } from 'rxjs/ajax';

const numeros$ = range(1, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(console.log);

// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe(console.log);

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe(console.log);