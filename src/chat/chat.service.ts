import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { FilterChatDto } from './dto/filter-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
    private userService: UserService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createChat(user: User, createChatDto: CreateChatDto) {
    const { receiver, message } = createChatDto;
    try {
      const userFound = await this.userRepository.findOneOrFail({
        where: [{ id: receiver }],
      });
      const chat = this.chatRepository.create({
        sender: user.id,
        receiver,
        message,
      });
      const result = await this.chatRepository.save(chat);
      return result;
    } catch (err) {
      return 'No such user found';
    }
  }

  async viewChat(user: User, filterChatDto: FilterChatDto) {
    const { receiver } = filterChatDto;
    const result = await this.chatRepository.find({
      select: ['message'],
      where: [
        { sender: user.id, receiver },
        { sender: receiver, receiver: user.id },
      ],
    });
    return result;
  }
}
