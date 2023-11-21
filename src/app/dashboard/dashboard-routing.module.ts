import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            //home
            {
                path: 'home',
                loadChildren: () =>
                    import('./pages/home/home.module').then(
                        (m) => m.HomeModule
                    ),
            },
            //students
            {
                path: 'students',
                loadChildren: () =>
                    import('./pages/students/students.module').then(
                        (m) => m.StudentsModule
                    ),
            },
            //courses
            {
                path: 'courses',
                loadChildren: () =>
                    import('./pages/courses/courses.module').then(
                        (m) => m.CoursesModule
                    ),
            },
            //enroll
            {
                path: 'enroll',
                loadChildren: () =>
                    import('./pages/enrollments/enrollments.module').then((m) => m.EnrollmentsModule),
                    data: { preload: true }
            },
            //users
            {
                path: 'users',
                canActivate: [adminGuard],
                loadChildren: () =>
                    import('./pages/users/users.module').then((m) => m.UsersModule),
            },
            //default
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }