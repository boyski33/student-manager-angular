import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Course} from './course';
import {serverUrl} from '../app.module';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CourseService {
    private coursesUrl = 'http://localhost:8080/courses';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getCourses(): Promise<Course[]> {
        return this.http.get(this.coursesUrl)
            .toPromise()
            .then(response => response.json() as Course[])
            .catch(this.handleError);
    }

    addCourse(course: Course): Promise<Course> {
        return this.http.post(this.coursesUrl, JSON.stringify(course), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Course)
            .catch(this.handleError);
    }

    deleteCourse(courseName: string): Promise<null> {
        const url = `${this.coursesUrl}/${courseName}`;
        return this.http.delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
