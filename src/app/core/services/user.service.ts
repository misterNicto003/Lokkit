import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.module';
import { usersData } from '../userData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = usersData;
  public activeUser: User = this.users[5];
  user: User | null = null;

  getAllUsers() {
    this.users = usersData;
  }

  getUserById(id: number): void {
    const newUser = this.users.find((user) => user._id === id);
    if (newUser) {
      this.user = newUser;
    } else {
      console.warn(`Пользователь с id ${id} не найден.`);
    }
  }

  updateUser(id: number, newUser: User) {
    this.users = this.users.map((user) =>
      user._id === id ? { ...user, ...newUser } : user
    );
  }
}
