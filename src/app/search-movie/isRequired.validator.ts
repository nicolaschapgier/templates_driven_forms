import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isRequiredValidator(
  titrecControlName: string,
  identifiantControlName: string
) {
  return (control: AbstractControl): ValidationErrors | null => {
    const titreControl = control.get(titrecControlName);
    const identifiantControl = control.get(identifiantControlName);

    if (!titreControl?.value && !identifiantControl?.value) {
      return { isRequired: true };
    } else return null;
  };
}

export function rangeDateValidator(min: number, max: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if ((isNaN(control.value) || control.value<min || control.value>max)){
      return {min : {value: control.value, expected: 'between ' + min + ' and ' + max + '.'}}
    }
    return null
  };
}
