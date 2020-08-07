import { Observable, Subscriber, Observer, Subscription, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]', value),
    error: err => console.warn('[error]', err),
    complete: () => console.info('[completed]')
};

const intervalo$ = new Observable<number>(subs => {

    const interval = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(interval);
        console.log('[interval] clear');
    };

});

// Cada subscriptor tiene su propia suscripcion, por lo que 
// lo números random son diferentes.
// const subs1 = intervalo$.subscribe(num => console.log('[subs1]:', num));
// const subs2 = intervalo$.subscribe(num => console.log('[subs2]:', num));

/**
 * 1. Casteo múltiple.
 * 2. Es un Observer. 
 * 3. Se puede manejar los métodos: next, error y complete
 */
const subject$ = new Subject<number>();
const subjectSubs = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    // Sino de hace el unsubscriber el interval sigue ejecutándose.
    subjectSubs.unsubscribe();
}, 3000);