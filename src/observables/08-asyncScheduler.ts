import { asyncScheduler } from 'rxjs';

// setTimeout( () => {}, 3000 );
// setInterval( () => {}, 3000 );

const saludar = (): void => console.log('Hola Palma');
const saludar2 = (name: any): void => console.log(`Hola ${name}`);

// console.info('%c#Inicio', 'color:DodgerBlue');
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Palma');
// console.info('%c#Fin', 'color:DodgerBlue');


const subs = asyncScheduler.schedule(function (state) {
    console.log(state);
    this.schedule((state || 0) + 1, 1000);
}, 3000, 0);


// setTimeout(() => subs.unsubscribe(), 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);