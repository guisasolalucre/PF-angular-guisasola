import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { UserActions } from "./user.actions";
import { UsersService } from "../users.service";

@Injectable()
export class UserEffects {

   loadUsers$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(UserActions.loadUsers),
         concatMap(() =>
            this.service.getUsers().pipe(
               map((data) =>
                  UserActions.loadUsersSuccess({ data })
               ),
               catchError((error) =>
                  of(UserActions.loadUsersFailure({ error }))
               )
            )
         )
      );
   });

   createUser$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(UserActions.createUser),
         concatMap((action) =>
            this.service.createUser(action.payload).pipe(
               map(() =>
                  UserActions.loadUsers()
               ),
               catchError((error) =>
                  of(UserActions.createUserFailure({ error }))
               )
            )
         )
      );
   });

   changeUserRole$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(UserActions.changeUserRole),
         concatMap((action) =>
            this.service.changeRole(action.id).pipe(
               map(() =>
                  UserActions.loadUsers()
               ),
               catchError((error) =>
                  of(UserActions.changeUserRoleFailure({ error }))
               )
            )
         )
      );
   });

   deleteUsers$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(UserActions.deleteUser),
         concatMap((action) =>
            this.service.deleteUser(action.id).pipe(
               map(() =>
                  UserActions.loadUsers()
               ),
               catchError((error) =>
                  of(UserActions.deleteUserFailure({ error }))
               )
            )
         )
      );
   });

   constructor(
      private actions$: Actions,
      private service: UsersService,
   ) { }
}
