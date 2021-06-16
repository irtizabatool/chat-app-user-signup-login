import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { FilterChatDto } from './dto/filter-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}
  @Post()
  @UseGuards(AuthGuard())
  async createChat(
    @Body() createChatDto: CreateChatDto,
    @Req() req: any,
  ): Promise<any> {
    const user = <User>req.user;
    return await this.chatService.createChat(user, createChatDto);
  }

  @Post('getmsg')
  @UseGuards(AuthGuard())
  async viewChat(
    @Body() filterChatDto: FilterChatDto,
    @Req() req: any,
  ): Promise<any> {
    const user = <User>req.user;
    const result = await this.chatService.viewChat(user, filterChatDto);
    if (!result.length) {
      return 'No messages found';
    } else {
      return result;
    }
  }
}
