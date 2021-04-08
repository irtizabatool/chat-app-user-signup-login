import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
    private userService: UserService,
  ) {}

  async createChat({ email }: User, createChatDto: CreateChatDto) {
    const { senderId, receiverId, message } = createChatDto;
    const user = await this.userService.findOne({ where: { email } });
    const chat = this.chatRepository.create({
      sender: senderId,
      receiver: receiverId,
      message,
    });
    const result = await this.chatRepository.save(chat);
    return result;
  }
}
