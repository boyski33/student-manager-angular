import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from '../course';
import {CourseService} from '../course.service';

@Component({
    selector: 'app-course-add',
    templateUrl: './course-add.component.html',
    styleUrls: ['./course-add.component.css'],
    providers: [CourseService]
})
export class CourseAddComponent implements OnInit {
    courses: Course[];
    newCourse: Course;
    @Output() addNewCourse = new EventEmitter();

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
        this.newCourse = new Course();
    }

    addCourse(): void {
        this.courseService.addCourse(this.newCourse)
            .then(() => {
                this.newCourse.name.trim();
                this.newCourse = new Course();
                this.addNewCourse.emit();
            })
            .catch(response => {
                alert(response._body);
            });
    }
}
