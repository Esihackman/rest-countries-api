import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state'; 
import { CountriesState } from './countries.state';

export const selectCountriesState = (state: AppState) => state.countries;

export const selectAllCountries = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.countries
);

export const selectSearchQuery = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.searchQuery
);

export const selectFilterRegion = createSelector(
  selectCountriesState,
  (state: CountriesState) => state.filterRegion
);

export const selectFilteredCountries = createSelector(
  selectAllCountries,
  selectSearchQuery,
  selectFilterRegion,
  (countries, searchQuery, filterRegion) => {
    return countries.filter(country => {
      const matchesSearch = country.name?.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesRegion = filterRegion
        ? country.region === filterRegion
        : true;

      return matchesSearch && matchesRegion;
    });
  }
);
