import { Routes } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed.component';
import { UsersComponent } from './features/users/pages/users.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
  { path: '', component: FeedComponent }, // Корневой путь
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: ProfileComponent }, // /users/1, /users/2 и т.д.
  // { path: '**', component: NotFoundComponent },
];
