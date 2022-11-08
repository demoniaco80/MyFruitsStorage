import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Fruit {
  name: string;
  type: string;
  quantity: BigInteger;
}

@Injectable({
  providedIn: 'root'
})

export class FruitsCrudService {

  endpoint = 'http://localhost:8080/api/fruits';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createFruit(fruit: Fruit): Observable<any> {
    return this.httpClient.post<Fruit>(this.endpoint, JSON.stringify(fruit), this.httpOptions)
      .pipe(
        catchError(this.handleError<Fruit>('Error occured'))
      );
  }

  getFruit(id): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`fruit fetched: ${id}`)),
        catchError(this.handleError<Fruit[]>(`Get fruit id=${id}`))
      );
  }

  getFruits(): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(this.endpoint)
      .pipe(
        tap(fruit => console.log('fruit retrieved!')),
        catchError(this.handleError<Fruit[]>('Get bike', []))
      );
  }

  updateFruit(id, fruit: Fruit): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(fruit), this.httpOptions)
      .pipe(
        tap(_ => console.log(`fruit updated: ${id}`)),
        catchError(this.handleError<Fruit[]>('Update bike'))
      );
  }

  deleteFruit(id): Observable<Fruit[]> {
    return this.httpClient.delete<Fruit[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`fruit deleted: ${id}`)),
        catchError(this.handleError<Fruit[]>('Delete fruit'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}