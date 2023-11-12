import { createActionGroup, emptyProps, props } from "@ngrx/store"
import { User } from "src/app/dashboard/pages/users/model/User"

export const AuthActions = createActionGroup({
   source: 'Auth',
   events: {
      'Set AuthUser': props<{ data: User}>(),
      'Reset State': emptyProps(),
   }
})