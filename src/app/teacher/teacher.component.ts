import {Component, OnInit} from '@angular/core';
import {TeacherService} from './teacher.service';
import {Teacher} from './teacher';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css'],
    providers: [TeacherService]
})
export class TeacherComponent implements OnInit {
    teachers: Teacher[];

    constructor(private teacherService: TeacherService) {
    }

    ngOnInit() {
        this.teachers = [];
    }

}
