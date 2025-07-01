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
