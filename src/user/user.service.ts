import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne(options?: any): Promise<User> {
    const user = await this.userRepository.findOne(options);
    return user;
  }

  async findByLogin({ email, password }: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await compare(password, user.password);
    console.log(areEqual);
    if (areEqual === false) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findByPayload({ email }: any): Promise<User> {
    return await this.findOne({
      where: { email },
    });
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, contact } = createUserDto;

    // check if the user exists in the db
    const userInDb = await this.userRepository.findOne({
      where: { email },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userRepository.create({
      name,
      email,
      password,
      contact,
    });
    await this.userRepository.save(user);
    return user;
  }

  async loginUser(loginDto: LoginUserDto) {
    const { email, password } = loginDto;
    try {
      const result = await this.userRepository.findOneOrFail({
        where: [{ email, password }],
      });
      return result;
    } catch (err) {
      return 'Email or Password is incorrect';
    }
  }

  async viewUser(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return user;
  }
}
