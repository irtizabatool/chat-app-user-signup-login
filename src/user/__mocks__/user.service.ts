import { userStub } from '../test/stubs/user.stub';

export const UserService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockReturnValue(userStub()),
  findByLogin: jest.fn().mockReturnValue(userStub()),
  findByPayload: jest.fn().mockReturnValue(userStub()),
  getUsers: jest.fn().mockReturnValue([userStub()]),
  registerUser: jest.fn().mockReturnValue(userStub()),
  loginUser: jest.fn().mockReturnValue(userStub()),
  viewUser: jest.fn().mockReturnValue(userStub()),
});
