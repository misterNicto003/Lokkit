import { Routes } from '@angular/router';
import { DevicesComponent } from './pages/devices/devices.component';
import { InfoComponent } from './pages/info/info.component';
import { SettingComponent } from './pages/setting/setting.component';

export const profileRoutes: Routes = [
  { path: 'info', title: 'Profile Info', component: InfoComponent },
  { path: 'setting', title: 'Profile Settings', component: SettingComponent },
  { path: 'devices', title: 'Profile Devices', component: DevicesComponent },
];
