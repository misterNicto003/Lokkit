export interface User {
  _id: number;
  name: string;
  userName: string;
  email: string;
  avatar: string;
  gender: 'male' | 'female';
  role: 'admin' | 'user';
  isActive: boolean;
}
