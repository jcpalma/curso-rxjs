import { interval } from 'rxjs';
import { map, scan, take, first, takeWhile } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

    const inicio = 7;
    // const countdown$ = interval(700).pipe(
    //     take(8),
    //     scan((acc, value) => acc - 1, inicio + 1)
    // );

    const countdown$ = interval(700).pipe(
        map(i => inicio - i),
        takeWhile(counter => counter >= 0)
    );


    // No tocar esta línea ==================
    countdown$.subscribe(console.log); // =
    // ======================================


})();

