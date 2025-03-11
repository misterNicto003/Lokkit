import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  private route = inject(Router);

  register() {
    this.route.navigate(['/login']);

    console.log('Пользователь успешно зарегестрирован');
  }

  login() {
    this.isLoggedIn = true;
    this.route.navigate(['/feed']);

    console.log('Пользователь успешно вошел');
  }
}
