import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../models/country.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private baseUrl = environment.countriesApiBaseUrl; // Should now be https://restcountries.com/v3.1

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/all?fields=name,flags,population,capital,region`
    ).pipe(
      tap(data => console.log('✅ API sample country:', data[0])),
      catchError(this.handleError)
    );
  }

  getCountryByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/alpha/${code}?fields=name,flags,population,capital,region`
    ).pipe(
      catchError(this.handleError)
    );
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/alpha?codes=${codes.join(',')}&fields=name,flags,population,capital,region`
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('❌ API Error: ', error);
    return throwError(() => error.message || 'Server Error');
  }
}
