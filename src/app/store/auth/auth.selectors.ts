import { State, createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";

export const authState = createFeatureSelector<AuthState>(authFeatureKey);

export const authUser = createSelector(
   authState, 
   (state) => state.authUser
);