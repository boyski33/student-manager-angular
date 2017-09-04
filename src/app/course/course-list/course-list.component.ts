import {Component, OnChanges, OnInit} from '@angular/core';
import {Course} from '../course';
import {CourseService} from '../course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    providers: [CourseService]
})
export class CourseListComponent implements OnInit, OnChanges {
    courses: Course[];
    selectedCourse: Course;

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
        // todo ask if this is ok
        this.courses = [];
        this.getCourses();
    }
    ngOnChanges() {
        this.courseService.getCourses()
            .then(data => this.courses = data);
    }

    onSelect(course: Course): void {
        this.selectedCourse = course;
    }
    removeCourse(course: Course): void {
        this.courseService.deleteCourse(course.name)
            .then(() => {
                    this.courses = this.courses.filter(c => c !== course);
                    if (this.selectedCourse === course) {
                        this.selectedCourse = null;
                    }
                }
            );
    }

    getCourses(): void {
        this.courseService.getCourses()
            .then(data => this.courses = data);
    }
}
