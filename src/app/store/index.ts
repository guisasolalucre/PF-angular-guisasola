import { ActionReducerMap } from "@ngrx/store";
import { authFeatureKey, authReducer, State } from "./auth/auth.reducer";

export interface AppState {
   [authFeatureKey]: State
}

export const appReducer: ActionReducerMap<AppState> = {
   [authFeatureKey]: authReducer,
}