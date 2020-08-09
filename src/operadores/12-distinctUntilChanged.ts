import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 2, 4, 5, 4, 4, 4, 3, 1);


numeros$.pipe(distinctUntilChanged())
    .subscribe(console.log);


interface Personajes {
    nombre: string;
}

const personajes: Personajes[] = [
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Dr. Willy' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'Megaman' },
    { nombre: 'X' },
    { nombre: 'Zero' },
];

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
)
    .subscribe(console.log);