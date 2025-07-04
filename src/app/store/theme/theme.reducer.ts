import { createReducer, on } from '@ngrx/store';
import { toggleTheme } from './theme.actions';
import { ThemeState } from '../../models/theme';

const initialState: ThemeState = {
  isDarkMode: false,
};

export const themeReducer = createReducer(
  initialState,
  on(toggleTheme, (state) => ({ ...state, isDarkMode: !state.isDarkMode }))
);
