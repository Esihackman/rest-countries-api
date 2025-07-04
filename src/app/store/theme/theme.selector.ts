import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from '../../models/theme';

export const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectTheme = createSelector(
  selectThemeState,
  (state: ThemeState) => state.isDarkMode
);
