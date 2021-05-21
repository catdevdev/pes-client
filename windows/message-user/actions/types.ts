export interface MessageUserI {
  type?: 'message-user';
  payload?: PayloadModel;
}

export type PayloadModel = { username: string };

export const OpenChatWindow = 'OPEN_CHAT_WINDOW';
