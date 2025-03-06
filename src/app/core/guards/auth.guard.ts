import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const auth: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isLoggedIn) {
    router.navigate(['/login']);
    return authService.isLoggedIn;
  }
  return authService.isLoggedIn;
};
