import { AbstractControl, ValidationErrors } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';


export function ageValidator(
    control: AbstractControl
): ValidationErrors | null {

    let birthdate = new Date(control.value);

    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);

    if (age < 18) {
        return { age: true, };
    }

    return null;
}


export function idExistsValidator(
    control: AbstractControl
): ValidationErrors | null {
    let studentService = new StudentService()

    return studentService.studentExistsByIdNumber(control.value) ? 
        {idnumberexists: true} : null
}

export function emailExistsValidator(
    control: AbstractControl
): ValidationErrors | null {
    let studentService = new StudentService()

    return studentService.studentExistsByEmail(control.value) ? 
        {emailexists: true} : null
}