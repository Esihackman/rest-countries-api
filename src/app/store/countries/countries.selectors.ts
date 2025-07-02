import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.state';

export const selectCountriesState = createFeatureSelector<CountriesState>('countries');

export const selectAllCountries = createSelector(
  selectCountriesState,
  (state) => state.countries
);

export const selectLoading = createSelector(
  selectCountriesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectCountriesState,
  (state) => state.error
);

export const selectSearchQuery = createSelector(
  selectCountriesState,
  (state) => state.searchQuery
);

export const selectFilterRegion = createSelector(
  selectCountriesState,
  (state) => state.filterRegion
);

export const selectFilteredCountries = createSelector(
  selectAllCountries,
  selectSearchQuery,
  selectFilterRegion,
  (countries, searchQuery, filterRegion) => {
    return countries.filter(country => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesRegion =
        !filterRegion || country.region?.toLowerCase() === filterRegion.toLowerCase();

      return matchesSearch && matchesRegion;
    });
  }
);

