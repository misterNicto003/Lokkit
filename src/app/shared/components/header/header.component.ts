import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, InputComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
