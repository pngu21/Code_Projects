// src/app/store/user/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(action => this.userService.getUsers(action.page).pipe(
      map(data => UserActions.loadUsersSuccess({ users: data.data, total: data.total })),
      catchError(error => of(UserActions.loadUsersFailure({ error })))
    ))
  ));

  loadUserDetails$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUserDetails),
    mergeMap(action => this.userService.getUser(action.id).pipe(
      map(user => UserActions.loadUserDetailsSuccess({ user })),
      catchError(error => of(UserActions.loadUserDetailsFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
