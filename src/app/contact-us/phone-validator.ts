import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    let valid = true;
    if (control.value) {
        const regex = new RegExp(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);
        valid = regex.test(control.value);
        return valid ? null : { invalidNumber: { valid: false, value: control.value } };
    }
    return valid ? null : { invalidNumber: { valid: false, value: control.value } };
}