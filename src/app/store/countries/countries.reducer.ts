import { createReducer, on } from '@ngrx/store';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountrySuccess,
  loadCountry,
  loadFilterCountries,
  setSelectedRegion,
} from './countries.actions';
import { CountryState } from '../../models/country';
import { searchCountry } from '../user/user.actions';

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  loading: false,
  selectedRegion: '',
  
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...state, loading: true })),
  on(loadCountrySuccess, (state, { country }) => ({
    ...state,
    country,
    loading: false,
  })),
  on(loadCountriesSuccess, (state, { countries }) => {
    return {
      ...state,
      countries,
      filteredCountries: countries,
      loading: false,
    };
  }),
  on(loadFilterCountries, (state, { countries }) => {
    return {
      ...state,
      filteredCountries: countries,
    };
  }),

  on(searchCountry, (state, { query }) => ({
    ...state,
    filteredCountries: state.countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    ),
  })),

  on(setSelectedRegion, (state, { region }) => ({
    ...state,
    selectedRegion: region,
    filteredCountries: region
      ? state.countries.filter((country) => country.region === region)
      : state.countries,
  }))
  
);
