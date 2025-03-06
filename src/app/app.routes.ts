import { Routes } from '@angular/router';
import { auth, notAuth } from './core/guards/auth.guard';
import { AuthComponent } from './features/auth/layout/auth/auth.component';
import { NotAuthComponent } from './features/auth/layout/not-auth/not-auth.component';
import { LoginComponent } from './features/auth/page/login/login.component';
import { RegisterComponent } from './features/auth/page/register/register.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { FeedComponent } from './features/post/pages/feed.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [auth],
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      {
        path: 'profile/:id',
        title: 'Profile',
        component: ProfileComponent,
        canActivate: [auth],
        loadChildren: () =>
          import('./features/profile/profile.routes').then(
            (p) => p.profileRoutes
          ),
      },

      {
        path: 'feed',
        title: 'Feed Posts',
        component: FeedComponent,
      },
    ],
  },
  {
    path: '',
    component: NotAuthComponent,
    canActivate: [notAuth],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', title: 'Login', component: LoginComponent },
      { path: 'register', title: 'Register', component: RegisterComponent },
    ],
  },
  { path: '**', title: 'Page 404', component: NotFoundComponent },
];
