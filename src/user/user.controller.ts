import { Body, Get, Param } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
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
  @Get(':id')
  async viewUser(@Param('id') id): Promise<User> {
    return this.userService.viewUser(id);
  }
}
