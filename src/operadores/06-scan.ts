import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulador: number, valor: number) => acumulador + valor;

// Reduce
from(numeros).pipe(reduce(totalAcumulador))
    .subscribe(console.log);

// Scan
from(numeros).pipe(scan(totalAcumulador))
    .subscribe(console.log);

// Simular Redux
interface User {
    id?: string,
    auth?: boolean,
    token?: string,
    edad?: number;
}
const users: User[] = [
    { id: 'jcpalma', auth: false, token: '' },
    { id: 'jcpalma', auth: true, token: 'ABC' },
    { id: 'jcpalma', auth: true, token: 'ABC123' }
];

const state$ = from(users).pipe(
    scan<User>((acc, cur) => {
        return { ...acc, ...cur };
    }, { edad: 38 })
);

const id$ = state$.pipe(
    map(state => state.id)
).subscribe(console.log);