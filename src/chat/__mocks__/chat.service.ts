import { chatStub } from '../test/stubs/chat.stub';

export const ChatService = jest.fn().mockReturnValue({
  viewChat: jest.fn().mockReturnValue([chatStub()]),
  createChat: jest.fn().mockReturnValue(chatStub()),
});
