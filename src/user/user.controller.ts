import { Body, Get, Param } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  /**
   * @api {get} /users Get Users Information
   * @apiName GetUsers
   * @apiGroup Users
   * @apiSuccess {object[]} users Array of all Users
   */
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Post('login')
  async loginUser(@Body() loginDto: LoginUserDto) {
    return this.userService.loginUser(loginDto);
  }
  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.registerUser(createUserDto);
  }
  /**
   * @api {get} /users Get User Information
   * @apiName GetUser
   * @apiGroup Users
   * @apiParam {String} id User Id
   * @apiSuccess {String} id User Id
   * @apiSuccess {String} name User Name
   * @apiSuccess {String} email User Email
   * @apiSuccess {String} password User Password
   * @apiSuccess {String} contact User Contact number
   * @apiSuccess {Date} createdAt Date of User created
   * @apiSuccessExample Successful-Response:
   *  HTTP/1.1 200 OK
   *     {
   *     "id": "02e793a0-10c4-4c45-a0f5-41db0fc6da06",
   *     "name": "rach",
   *     "email": "rach@email.com",
   *     "password": "$2b$10$LH.8dOgMYpZ5EyJvj8bIheIZ3qIf/cXcZ9psUDyS0kSxmHayFR9K6",
   *     "contact": "+91123569789",
   *     "createdAt": "2021-06-04T05:36:49.276Z"
   *      }
   */
  @Get(':id')
  async viewUser(@Param('id') id): Promise<User> {
    return this.userService.viewUser(id);
  }
}
