import { CourseName, Teacher } from ".";

export interface ICourse {
    id: string,
    name: CourseName | null,
    startDate: Date,
    endDate: Date,
    teacher: Teacher | null,
}