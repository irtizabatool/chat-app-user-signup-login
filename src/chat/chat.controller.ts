import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}
  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() createChatDto: CreateChatDto, @Req() req: any) {
    console.log('hi');
    const user = <User>req.user;
    return await this.chatService.createChat(user, createChatDto);
  }
}
