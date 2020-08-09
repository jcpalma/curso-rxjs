import { } from 'rxjs';
import { } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delay/1';

// ajax.get(url, { 'mi-token': 'ABC1223' }).subscribe(console.log);

// ajax.put(url, { id: 1, nombre: 'José' }, { 'mi-token': 'ABC123' }).subscribe(console.log);


ajax({
    url,
    method: 'GET', // 'POST' o 'DELETE' o 'PUT'
    headers: { 'mi-token': 'ABC123' },
    body: { id: 1, nombre: 'José' }
}).subscribe(console.log);