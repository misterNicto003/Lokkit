import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './features/profile/profile.component';
import { UsersComponent } from './features/users/pages/users.component';
import { HeaderComponent, SidebarComponent } from './shared/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FeedComponent,
    SidebarComponent,
    CommonModule,
    // UsersComponent,
    // ProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lokkit';
}
