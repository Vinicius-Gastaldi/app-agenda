import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';

export const AdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Only check admin status (AuthGuard already verified authentication)
  if (!authService.isAdmin()) {
    return router.createUrlTree(['/access-denied']);
  }

  return true;
};