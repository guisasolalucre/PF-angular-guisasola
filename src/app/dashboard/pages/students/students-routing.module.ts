import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsContentComponent } from './students-content/students-content.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
    { 
        path: '', 
        component: StudentsContentComponent 
    },
    {
        path: 'detail/:id',
        component: StudentDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule {}
