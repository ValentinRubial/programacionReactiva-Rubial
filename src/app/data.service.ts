import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getDataPromise(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Aparesco luego de 2 segundos');
      }, 2000);
    });
  }

  getDataObservable(): Observable<string> {
    return of('Aparesco al isntante').pipe(
      map((data) => data.toUpperCase())
    );
  }
}
