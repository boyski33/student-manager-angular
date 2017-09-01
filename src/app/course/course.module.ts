import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './course.component';
import {CourseAddComponent} from './course-add/course-add.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseService} from './course.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CourseComponent, CourseAddComponent, CourseListComponent],
    providers: [CourseService]
})
export class CourseModule {
}
