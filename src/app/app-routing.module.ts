import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { dashboardGuard } from './core/guards/dashboard.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [dashboardGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(r => r.DashboardModule)
  }, 

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(r => r.AuthModule)
  }, 

  {path: '', redirectTo: 'dashboard/home', pathMatch: 'full'},
  {path: '**', component: Page404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
