// src/app/store/user/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
// import { User, UserDetails } from 'src/app/models/user.model';
import { User, UserDetails } from '../../models/user.model';
import {ActionReducerMap,MetaReducer} from '@ngrx/store';


export interface State {
  users: User[];
  userDetails: UserDetails | null;
  loading: boolean;
  error: string | null;
  total: number;
}

const initialState: State = {
  users: [],
  userDetails: null,
  loading: false,
  error: null,
  total: 0,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users, total }) => ({ ...state, loading: false, users, total })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(UserActions.loadUserDetails, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUserDetailsSuccess, (state, { user }) => ({ ...state, loading: false, userDetails: user })),
  on(UserActions.loadUserDetailsFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
