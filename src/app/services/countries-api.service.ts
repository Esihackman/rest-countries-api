import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private baseUrl = environment.countriesApiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all`).pipe(
      catchError(this.handleError)
    );
  }

  getCountryByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${code}`).pipe(
      catchError(this.handleError)
    );
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/alpha?codes=${codes.join(',')}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API Error: ', error);
    return throwError(() => error.message || 'Server Error');
  }
}
