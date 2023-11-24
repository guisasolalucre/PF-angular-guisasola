import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/dashboard/pages/users/model/User";
import { AuthActions } from "./auth.actions";

export const authFeatureKey = 'auth'

export interface State {
   authUser: User | null;
}

const initialState: State = {
   authUser: null,
}

export const authReducer = createReducer(
   initialState,

   on(AuthActions.setAuthUser, (state, { data }) => (
      {...state, authUser: data}
   )),
   
   on(AuthActions.resetState, () => initialState)
)