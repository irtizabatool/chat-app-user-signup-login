import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import * as dotenv from 'dotenv';
import { Chat } from './chat/chat.entity';
import { AuthModule } from './auth/auth.module';

dotenv.config();
@Module({
  imports: [
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
  providers: [AppService],
})
export class AppModule {}
