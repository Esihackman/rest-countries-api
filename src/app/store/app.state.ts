// src/app/store/app.state.ts

import { CountriesState } from './countries/countries.state';

export interface AppState {
  countries: CountriesState;
}
