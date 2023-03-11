import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function minDateValidator(minDate: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // parse control value to Date
    const date = new Date(control.value);
    // check if control value is superior to date given in parameter
    if (minDate.getTime() < date.getTime()) {
      return null;
    }
    // 'min' is the error key
    else return { min: { value: control.value, expected: minDate } };
  };
}
