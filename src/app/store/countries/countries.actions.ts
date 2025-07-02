import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country.model';

export const loadCountries = createAction('[Countries] Load Countries');
export const loadCountriesSuccess = createAction(
  '[Countries] Load Countries Success',
  props<{ countries: Country[] }>()
);
export const loadCountriesFailure = createAction(
  '[Countries] Load Countries Failure',
  props<{ error: string }>()
);

export const setSearchQuery = createAction(
  '[Countries] Set Search Query',
  props<{ query: string }>()
);

export const setFilterRegion = createAction(
  '[Countries] Set Filter Region',
  props<{ region: string }>()
);
