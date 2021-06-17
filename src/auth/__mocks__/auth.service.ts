import { loginStub } from '../test/stubs/login.stub';
import { registrationStub } from '../test/stubs/registration.stub';

export const AuthService = jest.fn().mockReturnValue({
  register: jest.fn().mockReturnValue(registrationStub()),
  login: jest.fn().mockReturnValue(loginStub()),
});
