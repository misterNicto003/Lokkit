import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = true;
  private route = inject(Router);

  register() {
    this.route.navigate(['/login']);

    console.log('Пользователь  зарегестрирован');
  }

  login() {
    this.isLoggedIn = true;
    this.route.navigate(['/feed']);

    console.log('Пользователь успешно вошел');
  }
}
