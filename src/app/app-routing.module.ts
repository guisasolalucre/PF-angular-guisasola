import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { StudentsContentComponent } from './dashboard/pages/students/students-content/students-content.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { EnrollmentsComponent } from './dashboard/pages/enrollments/enrollments.component';
import { StudentDetailComponent } from './dashboard/pages/students/student-detail/student-detail.component';
import { Page404Component } from './page404/page404.component';
import { CoursesContentComponent } from './dashboard/pages/courses/courses-content/courses-content.component';
import { CourseDetailComponent } from './dashboard/pages/courses/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
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
          component: CoursesContentComponent,
        },
        {
          path: 'enroll',
          component: EnrollmentsComponent,
        },
        {
          path: 'users',
          component: UsersComponent,
        },
        {
          path: 'students/detail/:id',
          component: StudentDetailComponent,
        },
        {
          path: 'courses/detail/:id',
          component: CourseDetailComponent,
        },

        {path: '**', redirectTo: 'dashboard/home', pathMatch: 'full'},
        {path: '', redirectTo: 'dashboard/home', pathMatch: 'full'},
      ]
  },

  {path: 'auth', component: AuthComponent},

  {path: '', redirectTo: 'dashboard/home', pathMatch: 'full'},
  {path: '**', component: Page404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
