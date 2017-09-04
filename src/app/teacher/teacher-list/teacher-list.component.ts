import {Component, OnInit} from '@angular/core';
import {Teacher} from '../teacher';
import {TeacherService} from '../teacher.service';

@Component({
    selector: 'app-teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.css'],
    providers: [TeacherService]
})
export class TeacherListComponent implements OnInit {
    teachers: Teacher[];
    selectedTeacher: Teacher;
    hide: number;

    constructor(private teacherService: TeacherService) {
    }

    ngOnInit() {
        this.teachers = [];
        this.getTeachers();
    }

    onSelect(teacher: Teacher): void {
        this.selectedTeacher = teacher;
    }

    getTeachers(): void {
        this.teacherService.getTeachers()
            .then(data => this.teachers = data);
    }

    removeTeacher(teacher: Teacher): void {
        this.teacherService.deleteTeacher(teacher.name)
            .then(() => {
                this.teachers = this.teachers.filter(t => teacher !== t);
                if (this.selectedTeacher === teacher) {
                    this.selectedTeacher = null;
                }
            });
    }
}
