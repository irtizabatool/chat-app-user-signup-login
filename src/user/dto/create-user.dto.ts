import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(1, 30)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(
    /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {
      message:
        'Password should be atleast 6 characters and should contain combination of uppercase, lowercase & numbers',
    },
  )
  @MinLength(6, {
    message: 'Password should be at least of 6 characters long',
  })
  password: string;

  @Matches(/^[0-9+]*$/, { message: 'Contact should contain numbers' })
  @IsPhoneNumber('IN', { message: 'Contact should be a phone number' })
  contact: string;
}
