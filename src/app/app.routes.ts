import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CompromissoListComponent } from './compromissos/compromisso-list/compromisso-list.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './auth/guards/admin.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';

export const routes: Routes = [
    // Public routes
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
  
    // Protected user routes
    { 
      path: 'compromissos',
      component: CompromissoListComponent,
      canActivate: [AuthGuard] 
    },
  
    // Admin-only route
    { 
      path: 'admin',
      component: DashboardComponent,
      canActivate: [AuthGuard, AdminGuard] 
    },
  
    // Error handling
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' } // Catch-all for invalid routes
  ];