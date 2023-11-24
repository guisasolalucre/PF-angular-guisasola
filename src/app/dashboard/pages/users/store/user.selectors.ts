import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';


export const userState = createFeatureSelector<fromUser.State>(
   fromUser.userFeatureKey
);

export const usersSelector = createSelector(
   userState,
   (state) => state.users
);

export const isLoadingUsers = createSelector(
   userState,
   (state) => state.isLoading
);