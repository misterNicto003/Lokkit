import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

// export function passwordWatchValidator(
//   control: AbstractControl
// ): ValidationErrors | null {
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');

//   if (password && confirmPassword && password.value !== confirmPassword.value) {
//     return { passwordMismatch: true };
//   }
//   return null;
// }

export function passwordWatchValidator(control: any) {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }

  return null;
}
