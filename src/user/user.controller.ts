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
   * @api {get} /user Get Users Information
   * @apiName GetUsers
   * @apiGroup Users
   * @apiSuccess {object[]} users Array of all Users
   */
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  /**
   * @api {post} /user/login Login User
   * @apiName LoginUser
   * @apiGroup Users
   * @apiParam {String} email User Email
   * @apiParam {String} password User password
   *
   * @apiSuccess {String} message
   *
   * @apiSuccessExample Successful Reponse:
   *     HTTP/1.1 200 OK
   *     {
   *     "id": "02e793a0-10c4-4c45-a0f5-41db0fc6da06",
   *     "name": "rach",
   *     "email": "rach@email.com",
   *     "password": "$2b$10$LH.8dOgMYpZ5EyJvj8bIheIZ3qIf/cXcZ9psUDyS0kSxmHayFR9K6",
   *     "contact": "+91123569789",
   *     "createdAt": "2021-06-04T05:36:49.276Z"
   *      }
   *
   * @apiError UserCredsIncorrect Email or password is incorrect
   * @apiErrorExample Error-response:
   *   HTTP/1.1 401 Incorrect
   *     {
   *       "error": "UserCredsIncorrect"
   *     }
   */
  @Post('login')
  async loginUser(@Body() loginDto: LoginUserDto) {
    return this.userService.loginUser(loginDto);
  }

  /**
   * @api {post} /user Register User
   * @apiName RegisterUser
   * @apiGroup Users
   * @apiParam {String} name User name
   * @apiParam {String} email User Email
   * @apiParam {String} password User password
   * @apiParam {String} contact User's contact number
   *
   * @apiParamExample Example Body:
   *    {
   *      "name": "Harry",
   *      "email": "potter@email.com",
   *      "password": "Potter@3841",
   *      "contact": "9121213212"
   *    }
   *
   * @apiSuccess {String} id User Id
   * @apiSuccess {String} name User Name
   * @apiSuccess {String} email User Email
   * @apiSuccess {String} password User Password
   * @apiSuccess {Phone} contact User's Contact number
   * @apiSuccess {Date} createdAt Date of User created
   */
  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.registerUser(createUserDto);
  }
  /**
   * @api {get} /user Get User Information
   * @apiName GetUser
   * @apiGroup Users
   * @apiParam {String} id User Id
   * @apiSuccess {String} id User Id
   * @apiSuccess {String} name User Name
   * @apiSuccess {String} email User Email
   * @apiSuccess {String} password User Password
   * @apiSuccess {String} contact User Contact number
   * @apiSuccess {Date} createdAt Date of User created
   *
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
   *
   * @apiError UserNotFound id of the user was not found
   * @apiErrorExample Error-response:
   *   HTTP/1.1 404 Not Found
   *     {
   *       "error": "UserNotFound"
   *     }
   */
  @Get(':id')
  async viewUser(@Param('id') id): Promise<User> {
    return this.userService.viewUser(id);
  }
}
