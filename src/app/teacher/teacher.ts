import {Course} from '../course/course';

export class Teacher {
    id: string;
    name: string;
    age: number;
    gender: string;
    degree: string;
    courses: Course[];
}
