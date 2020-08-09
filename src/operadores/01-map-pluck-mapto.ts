import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1, 5).pipe(
//     map<number, string>(value => (value * 10).toString())
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(map(event => event.code));

// Extrae el valor de la propiedad key del evento.
const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'));

const keyupMaoTo$ = keyup$.pipe(
    mapTo('tecla presionada'));

keyupCode$.subscribe(value => console.log('map', value));
keyupPluck$.subscribe(value => console.log('pluck', value));
keyupMaoTo$.subscribe(value => console.log('mapTo', value));