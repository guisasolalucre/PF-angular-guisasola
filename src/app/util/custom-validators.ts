import { AbstractControl, ValidationErrors } from '@angular/forms';


export function ageValidator(
    control: AbstractControl
): ValidationErrors | null {

    let birthdate = new Date(control.value);
    let today = new Date();

    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);

    if (age < 18) {
        return { age: true, };
    }

    return null;
}