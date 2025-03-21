import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { PasswordFormComponent } from '../../components/password-form/password-form.component';
import { InfoFormComponent } from '../../components/info-form/info-form.component';

@Component({
  selector: 'app-info',
  imports: [PasswordFormComponent, InfoFormComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  public userService = inject(UserService);
}
