import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from "../model/User";
import { UserActions } from "./user.actions";

export const userFeatureKey = 'user';

export interface State {
   isLoading: boolean;
   users: User[];
   error: unknown;
}

export const initialState: State = {
   isLoading: false,
   users: [],
   error: null,
};

export const reducer = createReducer(
   initialState,

   // LOAD USERS
   on(UserActions.loadUsers, (state) => (
      {
         ...state,
         isLoading: true
      }
   )),

   on(UserActions.loadUsersSuccess, (state, { data }) => (
      {
         ...state,
         isLoading: false,
         users: data
      }
   )),

   on(UserActions.loadUsersFailure, (state, { error }) => (
      {
         ...state,
         isLoading: false,
         error
      }
   )),


      // CREATE USERS
      on(UserActions.createUser, (state) => (
         {
            ...state,
            isLoading: true
         }
      )),
   
      on(UserActions.createUserFailure, (state, { error }) => (
         {
            ...state,
            isLoading: false,
            error
         }
      )),
   
      // UPDATE USERS
      on(UserActions.changeUserRole, (state) => (
         {
            ...state,
            isLoading: true
         }
      )),
   
      on(UserActions.changeUserRoleFailure, (state, { error }) => (
         {
            ...state,
            isLoading: false,
            error
         }
      )),
   
      // DELETE USERS
      on(UserActions.deleteUser, (state) => (
         {
            ...state,
            isLoading: true
         }
      )),
   
      on(UserActions.deleteUserFailure, (state, { error }) => (
         {
            ...state,
            isLoading: false,
            error
         }
      )),
   

);


export const userFeature = createFeature({
   name: userFeatureKey,
   reducer,
});