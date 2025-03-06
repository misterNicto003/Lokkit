import { Component } from '@angular/core';
import { HeaderComponent, SidebarComponent } from '../../shared/shared';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
