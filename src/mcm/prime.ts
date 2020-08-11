import { } from 'rxjs';
import { } from 'rxjs/operators';
import { } from 'rxjs/ajax';

const isPrime = (numero: number): boolean => {
    if (numero < 1) return false;
    if (numero !== 2 && numero % 2 === 0) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

const getPrimes = (numero: number): number[] => {
    let primes: number[] = [];
    for (let i = 1; i <= numero; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
};

console.log(getPrimes(20));