import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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

from(personajes)
    .pipe(distinctUntilKeyChanged('nombre'))
    .subscribe(console.log);