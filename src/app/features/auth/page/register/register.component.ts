import { Component, inject, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IconComponent } from '../../../../shared/shared';
import { CommonModule } from '@angular/common';
import { passwordWatchValidator } from '../../password-watch.validator';
import { retry } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, IconComponent, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthService);

  form = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: passwordWatchValidator }
  );

  getErrorMessage(controlName: string): string | null {
    const controle = this.form.get(controlName);

    if (!controle) {
      return null;
    }
    if (controle.touched && controle.hasError('required')) {
      return 'This field is required';
    }

    if (controle.touched && controlName === 'email') {
      if (controle.hasError('required')) {
        return 'Invalid email address';
      } else if (controle.hasError('email')) {
        return 'Please enter a valid email address';
      } else if (controle.hasError('minlength')) {
        return 'Minimum 6 characters required';
      }
      return '';
    }
    if (
      controle.touched &&
      controlName === 'username' &&
      controle.hasError('minlength')
    ) {
      return 'Minimum 6 characters required';
    }
    if (
      controle.touched &&
      controlName === 'password' &&
      controle.hasError('minlength')
    ) {
      return 'Minimum 6 characters required';
    }

    if (
      controle.touched &&
      controlName === 'confirmPassword' &&
      this.form.hasError('password')
    ) {
      return 'The passwords do not match';
    }

    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.register();

      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
