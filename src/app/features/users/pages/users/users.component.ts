import { Component, inject, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  userService = inject(UserService);

  users = this.userService.users;

  constructor() {
    this.userService.getAllUsers();

    // this.userService.getActiveUser(console.log());
  }

  ngOnInit(): void {}
}
