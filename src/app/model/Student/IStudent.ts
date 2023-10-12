import { Course } from "../Course/Course";

export interface IStudent {
    id: string;
    idnumber: number;
    active: boolean;
    name: string;
    surname: string;
    dob: Date;
    email: string;
    courses: Array<Course>;
}