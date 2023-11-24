
import { nanoid } from "nanoid";
import { IStudent } from "./IStudent"

export class Student implements IStudent{

    constructor(
        public id: string = nanoid(5), 
        public idnumber: number = 0,
        public name: string = "", 
        public surname: string = "", 
        public dob: Date = new Date(),
        public email: string = "",
    ){}
}