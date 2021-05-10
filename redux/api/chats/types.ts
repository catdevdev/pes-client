export type Chat = {
  chatId: string;
  chatName: string;
  userCount: number;
};

export type Chats = Chat[];

export type Message = {
  messageId?: string;
  username: string;
  message: string;
};

export type Messages = Message[];
