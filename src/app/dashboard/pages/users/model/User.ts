import { nanoid } from 'nanoid';
import { IUser } from './IUser'
import { Role } from './enums';

export class User implements IUser{

    constructor(
        public id: string = nanoid(5), 
        public username: string = "",
        public password: string = "",
        public role: string = Role[1],
        public token: string = nanoid(25)
    ){}
    
}