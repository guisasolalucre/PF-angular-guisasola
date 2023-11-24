import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, authFeatureKey } from "./auth.reducer";

export const authState = createFeatureSelector<State>(authFeatureKey);

export const authUser = createSelector(
   authState, 
   (state) => state.authUser
);