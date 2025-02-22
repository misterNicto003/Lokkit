import { Component, inject } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-users',
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public userService = inject(UserService);
}
