import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[observer:next]', value),
    error: err => console.warn('[observer:error]', err),
    complete: () => console.info('[observer:completed]')
};

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    subs.next('Otro');
});


// obs$.subscribe(console.log);

obs$.subscribe({
    next: valor => console.log('[next]', valor),
    error: err => console.warn('[error]', err),
    complete: () => console.log('[completed]')
});

obs$.subscribe(observer);