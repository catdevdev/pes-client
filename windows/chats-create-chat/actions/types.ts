export const ChangeChatDataWindow = 'Chats-Create-Chat/CHANGE_CHAT_DATA';

export interface ChatsCreateChatI {
  type?: 'chats-create-chat';
  payload?: {
    relatedWindowId: string;
    onFinishedCreate: () => void;
    chatName: string;
    chatPassword: string;
  };
}
