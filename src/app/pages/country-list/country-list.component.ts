import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

import { Country } from '../../models/country.model';
import { AppState } from '../../store/app.state';
import {
  loadCountries,
  setSearchQuery,
  setFilterRegion,
} from '../../store/countries/countries.actions';
import {
  selectAllCountries,
  selectFilterRegion,
  selectSearchQuery,
} from '../../store/countries/countries.selectors';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries$!: Observable<Country[]>;
  searchQuery$!: Observable<string>;
  regionFilter$!: Observable<string>;
  filteredCountries$!: Observable<Country[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCountries());

    this.countries$ = this.store.select(selectAllCountries);
    this.searchQuery$ = this.store.select(selectSearchQuery);
    this.regionFilter$ = this.store.select(selectFilterRegion);

    this.filteredCountries$ = combineLatest([
      this.countries$,
      this.searchQuery$,
      this.regionFilter$,
    ]).pipe(
      map(([countries, search, region]) =>
        countries.filter((country) => {
          const matchesSearch = country.name?.common
            .toLowerCase()
            .includes(search.toLowerCase());

          const matchesRegion = region ? country.region === region : true;

          return matchesSearch && matchesRegion;
        })
      )
    );
  }

  handleSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.store.dispatch(setSearchQuery({ query: value }));
  }

  handleRegion(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.store.dispatch(setFilterRegion({ region: value }));
  }
}
