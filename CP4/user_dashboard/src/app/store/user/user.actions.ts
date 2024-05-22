// src/app/store/user/user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User, UserDetails } from '../../models/user.model';

export const loadUsers = createAction('[User List] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: User[], total: number }>());
export const loadUsersFailure = createAction('[User List] Load Users Failure', props<{ error: any }>());

export const loadUserDetails = createAction('[User Details] Load User Details', props<{ id: number }>());
export const loadUserDetailsSuccess = createAction('[User Details] Load User Details Success', props<{ user: UserDetails }>());
export const loadUserDetailsFailure = createAction('[User Details] Load User Details Failure', props<{ error: any }>());
