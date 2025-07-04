import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../models/user';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectSearchQuery = createSelector(
  selectUserState,
  (state: UserState) => state.searchValue
);
