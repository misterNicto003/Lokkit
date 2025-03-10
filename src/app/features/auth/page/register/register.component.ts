import { Component, Inject } from '@angular/core';
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

@Component({
  selector: 'app-register',
  imports: [FormsModule, IconComponent, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  title = '';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordWatchValidator }
    );
  }

  getErrorMessage(controlName: string): string | null {
    const controle = this.form.get(controlName);

    if (!controle) {
      return null;
    }
    if (controle.touched && controle.hasError('required')) {
      return 'This field is required';
    }
    if (
      controle.touched &&
      controlName === 'email' &&
      controle.hasError('email')
    )
      return '';

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
      controlName === ' confirmPassword' &&
      this.form.hasError('passwordMismatch')
    ) {
      return 'The passwords do not match';
    }

    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched(); // Помечаем все поля как "затронутые"
      console.log('Form is invalid');
    }
  }
}
