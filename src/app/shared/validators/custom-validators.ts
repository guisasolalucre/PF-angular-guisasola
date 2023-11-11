import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { StudentService } from 'src/app/dashboard/pages/students/student.service';
import { UsersService } from 'src/app/dashboard/pages/users/users.service';


export function ageValidator(control: AbstractControl): ValidationErrors | null {

    let birthdate = new Date(control.value);

    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);

    if (age < 18) {
        return { age: true, };
    }

    return null;
}


export function idExistsValidator(studentService: StudentService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const idControl = control.root.get('id');
        const idnumber = control.value;

        if (!idControl || !idnumber) {
            return of(null);
        }

        const id = idControl.value;

        return studentService.studentExistsByIdNumber(id, idnumber)
            .pipe(
                map(exists => exists ? { idnumberexists: true } : null),
                catchError(() => of(null)) // Maneja errores y devuelve null
            );
    };
}


export function emailExistsValidator(studentService: StudentService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const idControl = control.root.get('id');
        const email = control.value;

        if (!idControl || !email) {
            return of(null);
        }

        const id = idControl.value;

        return studentService.studentExistsByEmail(id, email)
            .pipe(
                map(exists => exists ? { emailexists: true } : null),
                catchError(() => of(null)) // Maneja errores y devuelve null
            );
    };
}

export function usernameExistsValidator(userService: UsersService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const idControl = control.root.get('id');
        const username = control.value;

        if (!idControl || !username) {
            return of(null);
        }

        const id = idControl.value;

        return userService.usernameExists(id, username)
            .pipe(
                map(exists => exists ? { usernameexists: true } : null),
                catchError(() => of(null)) // Maneja errores y devuelve null
            );
    };
}