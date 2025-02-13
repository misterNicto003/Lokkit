import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
