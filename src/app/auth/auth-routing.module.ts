import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    { 
        path: '', 
        component: AuthComponent,
        children: [
            //login
            {
                path: 'login',
                loadChildren: () =>
                    import('./pages/login/login.module').then(
                        (m) => m.LoginModule
                    ),
            },
            //default
            {
                path: '**',
                redirectTo: 'login',
                pathMatch: 'full',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
