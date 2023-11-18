import { Course } from "../../courses/model/Course";
import { Student } from "../../students/model/Student";

export interface IEnrollment {
   id: string;
   studentId: string;
   courseId: string;
   student?: Student;
   course?: Course;
}