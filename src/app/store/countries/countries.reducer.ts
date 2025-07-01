import { createReducer, on } from '@ngrx/store';
import { CountriesState, initialCountriesState } from './countries.state';
import * as CountryActions from './countries.actions';

export const countriesReducer = createReducer(
  initialCountriesState,
  on(CountryActions.loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false
  })),
  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
