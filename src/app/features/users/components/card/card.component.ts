import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../../core/models/user.module';
import { IconComponent } from '../../../../shared/components/icons/icon.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() user!: User;

  showUser = true;
  // userService = inject(UserService);

  // users = this.userService.users;

  // constructor() {
  //   this.userService.getAllUsers();
  // }

  ngOnInit(): void {}

  getActiveUser() {
    this.showUser = !this.showUser;
  }
}
