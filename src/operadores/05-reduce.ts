import { interval } from 'rxjs';
import { take, reduce, tap, skip } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valor: number) => acumulador + valor;

const total = numbers.reduce(totalReducer, 0);
console.log('Total:', total);


interval(500)
    .pipe(
        skip(1),
        take(5),
        tap(console.log),
        reduce(totalReducer, 0)
    )
    .subscribe({
        next: value => console.log('[next]', value),
        complete: () => console.log('[complete]')
    });