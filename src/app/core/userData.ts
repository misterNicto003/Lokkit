import { User } from './models/user.module';

export const usersData: User[] = [
  {
    _id: 1,
    name: 'Ahmed Gazdiev',
    userName: '@ahm_gazdiev',
    email: 'ahmedgazdiev@example.com',
    avatar:
      'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',

    gender: 'male',
    role: 'admin',
    isActive: false,
  },
  {
    _id: 2,
    name: 'Mustafa Aushev',
    userName: '@m_aushev',
    email: 'mustafaaushev@example.com',
    avatar:
      'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    gender: 'male',
    role: 'user',
    isActive: false,
  },
  {
    _id: 3,
    name: 'Yakhya Mestoev',
    userName: '@yakhya_mestoev',
    email: 'yakhyanovate@example.com',
    avatar:
      'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    gender: 'male',
    role: 'user',
    isActive: true,
  },
  {
    _id: 4,
    name: 'Abu-Bakr user',
    userName: '@abu_aushev',
    email: 'abuaushev@example.com',
    avatar:
      'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    gender: 'male',
    role: 'user',
    isActive: false,
  },
  {
    _id: 5,
    name: 'Angelina Jolie',
    userName: '@angelina_jol',
    email: 'angelinajol@example.com',
    avatar:
      'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    gender: 'female',
    role: 'user',
    isActive: false,
  },
  {
    _id: 6,
    name: 'John Wick',
    userName: '@john_wick',
    email: 'johndwick@gexample.com',
    avatar:
      'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    gender: 'female',
    role: 'user',
    isActive: false,
  },
];
