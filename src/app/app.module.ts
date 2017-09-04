import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {CourseModule} from './course/course.module';
import {StudentModule} from './student/student.module';
import {TeacherModule} from './teacher/teacher.module';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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

export const serverUrl = 'http://localhost:8080';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        CourseModule,
        StudentModule,
        TeacherModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
