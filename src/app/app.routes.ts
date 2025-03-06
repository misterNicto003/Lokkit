import { Routes } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed.component';
import { UsersComponent } from './features/users/pages/users.component';
import { ProfileComponent } from './features/profile/profile.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { auth } from './core/guards/auth.guard';
import { AuthComponent } from './features/auth/auth.component';
import { InfoComponent } from './features/profile/pages/info/info.component';
import { DevicesComponent } from './features/profile/pages/devices/devices.component';
import { SettingComponent } from './features/profile/pages/setting/setting.component';

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
        canActivateChild: [auth],

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
  { path: '**', component: NotFoundComponent },
];
