import { Course } from "../Course/Course";

export interface IStudent {
    id: string;
    active: boolean;
    name: string;
    surname: string;
    dob: Date;
    email: string;
    courses: Array<Course>;
}