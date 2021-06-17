import { Test } from '@nestjs/testing';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { userStub } from '../test/stubs/user.stub';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { RegistrationStatus } from '../interfaces/registration-status.interface';
import { registrationStub } from './stubs/registration.stub';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { LoginStatus } from '../interfaces/login-status.interface';
import { loginStub } from './stubs/login.stub';

jest.mock('../auth.service.ts');

describe('authController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleReference = await Test.createTestingModule({
      imports: [],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = moduleReference.get<AuthController>(AuthController);
    authService = moduleReference.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('register', () => {
    describe('when register is called', () => {
      let status: RegistrationStatus;
      let createUserDto: CreateUserDto;

      beforeEach(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          contact: userStub().contact,
        };
        status = await authController.register(createUserDto);
      });

      test('then it should call authService', () => {
        expect(authService.register).toHaveBeenCalledWith(createUserDto);
      });

      test('then it should return a Success Message', () => {
        expect(status).toEqual(registrationStub());
      });
    });
  });

  describe('login', () => {
    describe('when login is called', () => {
      let status: LoginStatus;
      let loginUserDto: LoginUserDto;

      beforeEach(async () => {
        loginUserDto = {
          email: userStub().email,
          password: userStub().password,
        };
        status = await authController.login(loginUserDto);
      });

      test('then it should call authService', () => {
        expect(authService.login).toHaveBeenCalledWith(loginUserDto);
      });

      test('then it should return a Success Message and Access Token', () => {
        expect(status).toEqual(loginStub());
      });
    });
  });
});
