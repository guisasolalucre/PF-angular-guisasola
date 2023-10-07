import { ICourse } from './ICourse'

export class Course implements ICourse{

    constructor(
        public id: number, 
        public name: string, 
    ){}


}