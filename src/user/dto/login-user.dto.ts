import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'Password should be at least of 6 characters long',
  })
  password: string;
}
