import { range, from, fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

// range(1, 10).pipe(
//     filter(x => x % 2 === 1)
// ).subscribe(console.log);

range(8, 10).pipe(
    filter((value, indx) => {
        // console.log('index: ', indx);
        return value % 2 === 1;
    })
).subscribe(console.log);

interface Personaje {
    tipo: string,
    nombre: string;
}

const personajes: Personaje[] = [
    { tipo: 'heroe', nombre: 'Batman' },
    { tipo: 'villano', nombre: 'Acertijo' },
    { tipo: 'heroe', nombre: 'Superman' },
    { tipo: 'villano', nombre: 'El Guasón' }
];

from(personajes)
    .pipe(filter(personaje => personaje.tipo !== 'heroe'))
    .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code),
        filter(code => code === 'Enter'),
        mapTo('Has presionado el ENTER')
    );

keyup$.subscribe(console.log);