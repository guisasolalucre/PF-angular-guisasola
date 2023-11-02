import { nanoid } from 'nanoid';
import { ICourse } from './ICourse'

export class Course implements ICourse{

    constructor(
        public id: string = nanoid(5), 
        public name: string = "",
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
    ){}
}