import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentAddGradeComponent } from './student/student-add-grade/student-add-grade.component';
import { CourseModule } from './course/course.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {

    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent,
        StudentListComponent,
        StudentAddComponent,
        StudentAddGradeComponent,
        StudentComponent,
        TeacherComponent,
        TeacherAddComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        ),
        CourseModule,
        StudentModule,
        TeacherModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
