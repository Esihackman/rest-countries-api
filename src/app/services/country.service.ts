import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>(
      `${environment.countriesApiBaseUrl}/all?fields=name,flags,population,capital,region,cca3,borders`
    );
  }

  getCountryByCode(code: string) {
    return this.http.get<Country[]>(`${environment.countriesApiBaseUrl}/alpha/${code}`);
  }

  // getCountriesBySearch(query: string) {

  // }
}
