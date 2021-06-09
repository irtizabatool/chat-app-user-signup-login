import { userStub } from '../test/stubs/user.stub';

export const UserService = jest.fn().mockReturnValue({
  getUsers: jest.fn().mockReturnValue([userStub()]),
  registerUser: jest.fn().mockReturnValue(userStub()),
  loginUser: jest.fn().mockReturnValue(userStub()),
  viewUser: jest.fn().mockReturnValue(userStub()),
});
