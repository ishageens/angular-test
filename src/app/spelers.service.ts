import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Speler } from './all-players/speler';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
    providedIn: 'root'
})

export class SpelersService {
    private spelersUrl = 'api/spelers';
    constructor(private http: HttpClient) { }

    getSpelers(): Observable<Speler[]> {
        return this.http.get<Speler[]>(this.spelersUrl).pipe(map(
            spelers => spelers.sort((a, b) => b.points > a.points ? 1 : -1)
        ), catchError(this.handleError('getSpelers', [])));
    }

    getSpeler(id: number): Observable<Speler> {
        const url = `${this.spelersUrl}/${id}`;
        return this.http.get<Speler>(url).
            pipe(
                catchError(this.handleError<Speler>(`getSpeler id=${id}`)));
    }

    deleteSpeler(speler: Speler | number): Observable<Speler> {
        const id = typeof speler === 'number' ? speler : speler.id;
        const url = `${this.spelersUrl}/${id}`;
        return this.http.delete<Speler>(url, httpOptions)
            .pipe(catchError(this.handleError<Speler>('deleteSpeler')));

    }

    searchSpeler(zoekString: string): Observable<Speler[]> {
        if (!zoekString.trim()) {
            return of([]);
        }
        return this.http.get<Speler[]>(`${this.spelersUrl}/?name=${zoekString}`)
            .pipe(
                catchError(this.handleError<Speler[]>('searchSpeler', [])));
    }

    updateSpeler(speler: Speler): Observable<any> {
        return this.http.put(this.spelersUrl, speler, httpOptions)
            .pipe(catchError(this.handleError<any>('updateSpeler')));
    }

    addSpeler(speler: Speler): Observable<Speler> {
        return this.http.post<Speler>(this.spelersUrl, speler, httpOptions)
            .pipe(catchError(this.handleError<Speler>('addSpeler')));
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