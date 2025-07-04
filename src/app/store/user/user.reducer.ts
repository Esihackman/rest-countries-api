import { createReducer, on } from '@ngrx/store';
// import { toggleTheme } from './theme.actions';
import { searchCountry } from './user.actions';
import { UserState } from '../../models/user';

const initialState: UserState = {
  searchValue: '',
};

export const UserReducer = createReducer(
  initialState,
  on(searchCountry, (state, {query}) => ({ ...state, searchValue: query }))
);
