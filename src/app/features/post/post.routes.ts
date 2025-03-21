import { Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';

export const postRoutes: Routes = [
  { path: ':id/edit', title: 'edit', component: EditComponent },
];
