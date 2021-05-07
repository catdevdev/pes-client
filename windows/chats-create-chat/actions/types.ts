export const ChangeChatDataWindow = 'Chats-Create-Chat/CHANGE_CHAT_DATA';

export interface ChatsCreateChatI {
  type?: 'chats-create-chat';
  payload?: {
    onCreate: () => void;
    chatName: string;
    chatPassword: string;
  };
}
