import { createReducer, on } from '@ngrx/store';
import { toggleDarkMode } from './theme.actions';
import { initialThemeState } from './theme.state';

export const themeReducer = createReducer(
  initialThemeState,
  on(toggleDarkMode, (state) => ({
    darkMode: !state.darkMode,
  }))
);
