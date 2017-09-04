import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {Course} from './course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
