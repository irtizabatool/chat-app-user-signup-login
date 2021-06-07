import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { User } from '../user.entity';
import { UserService } from '../user.service';
import { userStub } from './stubs/user.stub';

jest.mock('../user.service.ts');

describe('userController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
    userService = moduleRef.get<UserService>(UserService);
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
});
