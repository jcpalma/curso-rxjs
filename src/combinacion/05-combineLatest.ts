import { fromEvent, combineLatest, fromEventPattern } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { } from 'rxjs/ajax';


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '*********';
input2.type = 'password';
document.body.append(input1, input2);


// Helper
const getInputStream = (el: HTMLInputElement) => fromEvent<KeyboardEvent>(el, 'keyup')
    .pipe(pluck<KeyboardEvent, string>('target', 'value'));


combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);