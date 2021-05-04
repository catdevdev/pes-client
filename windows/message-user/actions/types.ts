export interface MessageUserI {
  type?: 'message-user';
  payload?: PayloadModel
};

export interface PayloadModel {
  username: string;
}

export const OpenChatWindow = 'OPEN_CHAT_WINDOW';