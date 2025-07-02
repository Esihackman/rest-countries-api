import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {
  Observable,
  combineLatest,
  map,
  BehaviorSubject
} from 'rxjs';

import { loadCountries } from '../../store/countries/countries.actions';
import { selectAllCountries, selectLoading } from '../../store/countries/countries.selectors';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries$: Observable<Country[]>;
  loading$: Observable<boolean>;

  private searchTerm$ = new BehaviorSubject<string>('');
  private selectedRegion$ = new BehaviorSubject<string>('');

  filteredCountries$: Observable<Country[]>;

  constructor(private store: Store) {
    this.countries$ = this.store.select(selectAllCountries);
    this.loading$ = this.store.select(selectLoading);

    this.filteredCountries$ = combineLatest([
      this.countries$,
      this.searchTerm$,
      this.selectedRegion$
    ]).pipe(
      map(([countries, searchTerm, region]) => {
        return countries.filter(country => {
          const matchesName = country.name?.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          const matchesRegion = region ? country.region === region : true;
          return matchesName && matchesRegion;
        });
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }

  onSearchChange(term: string): void {
    this.searchTerm$.next(term);
  }

  onRegionChange(region: string): void {
    this.selectedRegion$.next(region);
  }

  handleSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onSearchChange(value);
  }

  handleRegion(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.onRegionChange(value);
  }
}
