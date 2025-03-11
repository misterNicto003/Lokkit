import { Component, inject } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icons/icon.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [IconComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  getErrorMessage(controlName: string): string | null {
    const controle = this.form.get(controlName);

    if (controle?.touched && controlName === 'email') {
      if (controle.hasError('required')) return 'Invalid email address';
    } else if (controle?.hasError('email')) {
      return 'Please enter a valid email address.';
    } else if (controle?.hasError('minlength')) {
      return 'The email must contain at least 6 characters.';
    }

    if (controle?.touched && controlName === 'password') {
      if (controle.hasError('required')) {
        return 'This field is required';
      } else if (controle.hasError('minlength')) {
        return 'The password must contain at least 6 characters.';
      }
    }

    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login();

      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
