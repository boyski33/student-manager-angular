import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course.component';
import {CourseAddComponent} from './course-add/course-add.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseService} from './course.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const courseRoutes: Routes = [
    {
        path: 'courses',
        component: CourseComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(courseRoutes)
    ],
    declarations: [
        CourseComponent,
        CourseAddComponent,
        CourseListComponent
    ],
    providers: [CourseService]
})
export class CourseModule {
}
