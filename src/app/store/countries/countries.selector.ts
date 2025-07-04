import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from '../../models/country';

export const selectCountriesState =
  createFeatureSelector<CountryState>('countries');

export const selectCountries = createSelector(
  selectCountriesState,
  (state: CountryState) => state.countries
);

export const selectFilteredCountries = createSelector(
  selectCountriesState,
  (state: CountryState) => state.filteredCountries
);

export const selectLoading = createSelector(
  selectCountriesState,
  (state: CountryState) => state.loading
);

export const selectCountry = createSelector(
  selectCountriesState,
  (state: CountryState) => state.country
);

export const selectSelectedRegion = createSelector(
  selectCountriesState,
  (state) => state.selectedRegion
);
