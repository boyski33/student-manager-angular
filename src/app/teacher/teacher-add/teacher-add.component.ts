import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Teacher} from '../teacher';
import {TeacherService} from '../teacher.service';

@Component({
    selector: 'app-teacher-add',
    templateUrl: './teacher-add.component.html',
    styleUrls: ['./teacher-add.component.css'],
    providers: [TeacherService]
})
export class TeacherAddComponent implements OnInit {
    newTeacher: Teacher;
    @Output() addTeacherEmitter = new EventEmitter();

    constructor(private teacherService: TeacherService) {
    }

    ngOnInit() {
        this.newTeacher = new Teacher();
    }

    addTeacher(event): void {
        this.teacherService.addTeacher(this.newTeacher)
            .then(() => {
                this.addTeacherEmitter.emit();
            })
            .catch(response => {
                alert(response._body);
            });
        this.newTeacher = new Teacher();
    }
}
