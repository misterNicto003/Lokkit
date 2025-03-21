import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, SidebarComponent } from '../../../../shared/shared';

@Component({
  selector: 'app-auth',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
