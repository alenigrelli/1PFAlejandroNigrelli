import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/login.reducer';

export const selectAuthState = createFeatureSelector<any>(
  fromAuth.authFeatureKey
);

export const selectorUsuarioActivo = createSelector(
  selectAuthState,
  (state: any) => {
    return state;
  }
)