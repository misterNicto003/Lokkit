import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordWatchValidator } from '../../../auth/password-watch.validator';
import { InputComponent } from '../../../../shared/shared';

@Component({
  selector: 'app-password-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss',
})
export class PasswordFormComponent {
  profilePasswordForm = new FormGroup(
    {
      oldPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: passwordWatchValidator }
  );

  onSubmit() {
    if (this.profilePasswordForm.valid) {
      this.profilePasswordForm.patchValue({
        oldPassword: 'oldPassword',
        password: 'newPassword',
        confirmPassword: 'newPassword',
      });

      console.log(
        'Successfully updated profilePassword:',
        this.profilePasswordForm.value
      );
    }
  }
}
