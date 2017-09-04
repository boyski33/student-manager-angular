import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherService} from './teacher.service';
import {Route, RouterModule} from '@angular/router';
import {TeacherComponent} from './teacher.component';
import {TeacherAddComponent} from './teacher-add/teacher-add.component';
import {TeacherListComponent} from './teacher-list/teacher-list.component';
import {TeacherAddCourseComponent} from './teacher-add-course/teacher-add-course.component';
import {FormsModule} from '@angular/forms';

const teacherRoutes: Route[] = [
    {
        path: 'teachers',
        component: TeacherComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(teacherRoutes)
    ],
    declarations: [
        TeacherComponent,
        TeacherAddComponent,
        TeacherListComponent,
        TeacherAddCourseComponent
    ],
    providers: [TeacherService]
})

export class TeacherModule {
}
