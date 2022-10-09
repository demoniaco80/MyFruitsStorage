import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Bike {
  brand: string;
  model: string;
}

@Injectable({
  providedIn: 'root'
})

export class BikesCrudService {

  endpoint = 'http://localhost:8080/api/bicycles';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createBike(bike: Bike): Observable<any> {
    return this.httpClient.post<Bike>(this.endpoint, JSON.stringify(bike), this.httpOptions)
      .pipe(
        catchError(this.handleError<Bike>('Error occured'))
      );
  }

  getBike(id): Observable<Bike[]> {
    return this.httpClient.get<Bike[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`bike fetched: ${id}`)),
        catchError(this.handleError<Bike[]>(`Get bike id=${id}`))
      );
  }

  getBikes(): Observable<Bike[]> {
    return this.httpClient.get<Bike[]>(this.endpoint)
      .pipe(
        tap(bikes => console.log('bikes retrieved!')),
        catchError(this.handleError<Bike[]>('Get bike', []))
      );
  }

  updateBike(id, bike: Bike): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(bike), this.httpOptions)
      .pipe(
        tap(_ => console.log(`bike updated: ${id}`)),
        catchError(this.handleError<Bike[]>('Update bike'))
      );
  }

  deleteBike(id): Observable<Bike[]> {
    return this.httpClient.delete<Bike[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`bike deleted: ${id}`)),
        catchError(this.handleError<Bike[]>('Delete bike'))
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