import { Course } from "../Course/Course";

export interface IStudent {
    id: string;
    active: boolean;
    name: string;
    surname: string;
    dob: Date;
    avgNote: number;
    email: string;
    courses: Array<Course>;
}