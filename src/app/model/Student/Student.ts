import { Course } from "../Course/Course";
import { IStudent } from "./IStudent"

export class Student implements IStudent{

    id: string = '';
    active: boolean = true;
    name: string = '';
    surname: string = ''; 
    dob: Date = new Date();
    email: string = '';
    courses: Array<Course> = [];

    constructor(
        // public id: string, 
        // public active: boolean = true,
        // public name: string, 
        // public surname: string, 
        // public dob: Date,
        // public email: string,
        // public courses: Array<Course> = [],
    ){}

    



}