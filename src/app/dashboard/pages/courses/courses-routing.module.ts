import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesContentComponent } from './courses-content/courses-content.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
    { 
        path: '',
        component: CoursesContentComponent 
    },
    {
        path: 'detail/:id',
        component: CourseDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}
