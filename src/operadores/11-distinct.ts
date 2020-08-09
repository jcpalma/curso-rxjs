import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1, 1, 1, 3, 3, 2, 4, 2, 4, 5, 4, 3, 1);


numeros$.pipe(distinct())
    .subscribe(console.log);


interface Personajes {
    nombre: string;
}

const personajes: Personajes[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Dr. Willy' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
];

from(personajes).pipe(distinct(p => p.nombre))
    .subscribe(console.log);