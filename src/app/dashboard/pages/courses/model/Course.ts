import { nanoid } from 'nanoid';
import { ICourse } from './ICourse'
import { CourseName, Teacher } from '.';

export class Course implements ICourse{

    constructor(
        public id: string = nanoid(5), 
        public name: CourseName | null = null,
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
        public teacher: Teacher | null = null,
    ){}
}