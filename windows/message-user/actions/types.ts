export interface MessageUserI {
  type?: 'message-user';
  payload?: PayloadModel
};

export interface PayloadModel {
  payload: { username: string; }
}

export const OpenChatWindow = 'OPEN_CHAT_WINDOW';