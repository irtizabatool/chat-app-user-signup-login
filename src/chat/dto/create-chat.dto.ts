import { User } from 'src/user/user.entity';

export class CreateChatDto {
  senderId: User;
  receiverId: User;
  message: string;
}
