import { createAction, props } from '@ngrx/store';

export const searchCountry = createAction(
  '[User] Search Country',
  props<{ query: string }>()
);
