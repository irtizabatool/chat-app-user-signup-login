import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ChatController } from './chat/chat.controller';
import * as dotenv from 'dotenv';
import { Chat } from './chat/chat.entity';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { ChatService } from './chat/chat.service';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([User, Chat]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Chat],
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    }),
    UserModule,
    ChatModule,
    AuthModule,
  ],
  controllers: [AppController, ChatController],
  providers: [AppService, UserService, AuthService, ChatService],
})
export class AppModule {}
