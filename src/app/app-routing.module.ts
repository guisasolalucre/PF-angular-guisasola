import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { StudentsContentComponent } from './dashboard/pages/students/students-content/students-content.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';

const routes: Routes = [
  {path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsContentComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
    ]
  },

  {path: 'auth', component: AuthComponent},

  {path: '', redirectTo: '/dashboard/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
