import { User } from 'src/user/user.entity';

export const userStub = (): User => {
  return {
    id: 'grjhhx-dfbdkbjnk-vjbxjdv',
    name: 'Jane doe',
    email: 'jane@gmail.com',
    password: 'Jane@4321',
    contact: '+91941905756',
    createdAt: '2021-06-04T05:36:49.276Z',
  };
};
