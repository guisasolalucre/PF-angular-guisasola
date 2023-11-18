import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/dashboard/pages/users/model/enums';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)

  return authService.authUser$.pipe(
    map((user) => {
      return (user?.role === Role[0]) ? 
        true : 
        router.createUrlTree(['/dashboard/home'])
    })
  );
};
