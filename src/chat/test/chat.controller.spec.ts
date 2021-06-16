import { Test } from '@nestjs/testing';
import { userStub } from '../../user/test/stubs/user.stub';
import { ChatController } from '../chat.controller';
import { Chat } from '../chat.entity';
import { ChatService } from '../chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import { FilterChatDto } from '../dto/filter-chat.dto';
import { chatStub } from './stubs/chat.stub';

jest.mock('../chat.service.ts');

describe('chatController', () => {
  let chatController: ChatController;
  let chatService: ChatService;

  beforeEach(async () => {
    const moduleReference = await Test.createTestingModule({
      imports: [],
      controllers: [ChatController],
      providers: [ChatService],
    }).compile();

    chatController = moduleReference.get<ChatController>(ChatController);
    chatService = moduleReference.get<ChatService>(ChatService);
    jest.clearAllMocks();
  });

  describe('viewChat', () => {
    describe('when viewChat is called', () => {
      let chats: Chat[];
      let filterChatDto: FilterChatDto;

      beforeEach(async () => {
        filterChatDto = {
          receiver: chatStub().receiver,
        };
        chats = await chatController.viewChat(filterChatDto, userStub().id);
      });

      test('then it should call chatService', () => {
        expect(chatService.viewChat).toBeCalled();
      });

      test('then it should return messages', () => {
        expect(chats).toEqual([chatStub()]);
      });
    });
  });

  describe('createChat', () => {
    describe('when createChat is called', () => {
      let chats: Chat[];
      let createChatDto: CreateChatDto;

      beforeEach(async () => {
        createChatDto = {
          receiver: chatStub().receiver,
          message: chatStub().message,
        };
        chats = await chatController.createChat(createChatDto, userStub().id);
      });

      test('then it should call chatService', () => {
        expect(chatService.createChat).toBeCalled();
      });

      test('then it should return message', () => {
        expect(chats).toEqual(chatStub());
      });
    });
  });
});
