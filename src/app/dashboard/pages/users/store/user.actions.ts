import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../model/User";

export const UserActions = createActionGroup({
   source: 'User',
   events: {
      'Load Users': emptyProps(),
      'Load Users Success': props<{ data: User[] }>(),
      'Load Users Failure': props<{ error: unknown }>(),

      'Create User': props<{ payload: User }>(),
      'Create User Failure': props<{ error: unknown }>(), 

      'Change User Role': props<{ id: string }>(),
      'Change User Role Failure': props<{ error: unknown }>(), 

      'Delete User': props<{ id: string }>(),
      'Delete User Failure': props<{ error: unknown }>(), 
   }
});