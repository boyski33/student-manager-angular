import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Teacher} from './teacher';

@Injectable()
export class TeacherService {
    private teachersUrl = 'http://localhost:8080/teachers';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getTeachers(): Promise<Teacher[]> {
        return this.http.get(this.teachersUrl)
            .toPromise()
            .then(response => response.json() as Teacher[])
            .catch(this.handleError);
    }

    addTeacher(teacher: Teacher): Promise<Teacher> {
        return this.http.post(this.teachersUrl, JSON.stringify(teacher), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Teacher)
            .catch(this.handleError);
    }

    deleteTeacher(teacherName: string): Promise<string> {
        return this.http.delete(`${this.teachersUrl}/${teacherName}`)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
