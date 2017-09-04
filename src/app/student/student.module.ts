import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentService} from './student.service';
import {Route, RouterModule} from '@angular/router';
import {StudentComponent} from './student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentAddGradeComponent} from './student-add-grade/student-add-grade.component';

const studentRoutes: Route[] = [
    {
        path: 'students',
        component: StudentComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(studentRoutes)
    ],
    declarations: [
        StudentComponent,
        StudentListComponent,
        StudentAddComponent,
        StudentAddGradeComponent
    ],
    providers: [StudentService]
})
export class StudentModule {
}
