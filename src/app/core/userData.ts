import { User } from './models/user.module';

export const usersData: User[] = [
  {
    _id: 123,
    name: 'Ahmed Gazdiev',
    userName: '@ahm_gazdiev',
    email: 'ahmedgazdiev@example.com',
    avatar:
      'https://s3-alpha-sig.figma.com/img/40b5/5696/29542efdba621d851dd98360dfba15eb?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YEwL2kUgC8-TofkyMDcS4xY3CH8B20dErrnPKq7kNZYUNXabGAzM5JuPttl4L1Ny9UJJVnPZcC3f5hVOb--CUQsrBX3Gj915Dkvc9177nc557rvHwiZtqTQua8uKTlkVFqRqnuOH9nTjQcetnzc5DgAyPujNfQyY3NqOO1ZB2dusWHTLgSdoaNo3Y2Fe8HAWRPpKVnPQfZu~GgR-nJiPqb832b-bkL5xMkcNgvDYh3cviZSQ3Lfzz~UzlQp2MOa1GyMLADIo9hJF9O8DQ0fjoCL18Z1i1ydvrAmi0-Eol1rVgqaQGIrSOrRwpZHOduKDuybiNCaT4H-pYvW7siNvUw__',
    gender: 'male',
    role: 'admin',
    isActive: false,
  },
  {
    _id: 456,
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
    _id: 789,
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
    _id: 101112,
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
    _id: 131415,
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
    _id: 161718,
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
