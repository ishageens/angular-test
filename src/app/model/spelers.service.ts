import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Speler } from './speler';

@Injectable({
    providedIn: 'root'
})

export class SpelersService {
    private spelersUrl = 'api/spelers';
    constructor(private http: HttpClient) { }

    getSpelers(): Observable<Speler[]> {
        return this.http.get<Speler[]>(this.spelersUrl).pipe(
            catchError(this.handleError('getSpelers', [])));
    }

    getSpeler(id: number): Observable<Speler> {
        const url = `${this.spelersUrl}/${id}`;
        return this.http.get<Speler>(url).
            pipe(
                catchError(this.handleError<Speler>(`getSpeler id=${id}`)));
    }

    handleError<T>(operation = 'operation', result?: T) {
        // TODO: explain generics in Typescript intro!! 
        return (error: any): Observable<T> => {
            // todo beter error logging 
            console.log(operation, error);
            return of(result as T);
        };
    }
}