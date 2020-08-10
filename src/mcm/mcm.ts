import { range } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { } from 'rxjs/ajax';

const factoresPrimos = [2, 3, 5, 7, 11, 13, 17, 19];
let numeros = Array(20).fill(1).map((n, i) => i + 1);
let mcm = 1; // mínimo común múltiplo
let indx = 0;
let prime = factoresPrimos[indx];
let count = 0;

const distintoAUno = (n: number) => n !== 1;

const factor = (n: number) => {
    if (n % prime === 0) {
        count++;
        return n / prime;
    }
    return n;
};

while (numeros.length > 0) {
    prime = factoresPrimos[indx];
    count = 0;
    numeros = numeros.filter(distintoAUno).map(factor);
    count === 0 ? indx++ : mcm *= prime;
}
console.log('mcm:', mcm);
