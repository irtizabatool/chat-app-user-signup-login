import { Test } from '@nestjs/testing';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { UserController } from '../user.controller';
import { User } from '../user.entity';
import { UserService } from '../user.service';
import { userStub } from './stubs/user.stub';

jest.mock('../user.service.ts');

describe('userController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleReference = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = moduleReference.get<UserController>(UserController);
    userService = moduleReference.get<UserService>(UserService);
    jest.clearAllMocks();
  });

  describe('viewUser', () => {
    describe('when viewUser is called', () => {
      let user: User;

      beforeEach(async () => {
        user = await userController.viewUser(userStub().id);
      });

      test('then it should call userService', () => {
        expect(userService.viewUser).toBeCalledWith(userStub().id);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await userController.getUsers();
      });

      test('then it should call userService', () => {
        expect(userService.getUsers).toHaveBeenCalled();
      });

      test('then it should return users', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe('registerUser', () => {
    describe('when registerUser is called', () => {
      let user: User;
      let createUserDto: CreateUserDto;

      beforeEach(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          contact: userStub().contact,
        };
        user = await userController.registerUser(createUserDto);
      });

      test('then it should call userService', () => {
        expect(userService.registerUser).toHaveBeenCalledWith(createUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('loginUser', () => {
    describe('when loginUser is called', () => {
      let loginUserDto: LoginUserDto;
      let user: User;
      beforeEach(async () => {
        loginUserDto = {
          email: userStub().email,
          password: userStub().password,
        };
        user = await userController.loginUser(loginUserDto);
      });

      test('then it should call userService', () => {
        expect(userService.loginUser).toHaveBeenCalledWith(loginUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });
});
