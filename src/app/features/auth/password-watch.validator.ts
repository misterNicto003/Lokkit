import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export function passwordWatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { pass: true };
}
