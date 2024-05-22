// src/app/store/user/user.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';

const selectUserState = createFeatureSelector<State>('user');

export const selectUsers = createSelector(selectUserState, (state: State) => state.users);
export const selectUserDetails = createSelector(selectUserState, (state: State) => state.userDetails);
export const selectLoading = createSelector(selectUserState, (state: State) => state.loading);
export const selectTotal = createSelector(selectUserState, (state: State) => state.total);