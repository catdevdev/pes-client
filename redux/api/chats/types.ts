enum Roles {
  notUser = 0,
  user = 1,
  admin = 3,
  creator = 5,
}

export type Chat = {
  chatId: string;
  chatName: string;
  userCount: number;
  role: Roles;
  chatImageLocation: string;
};

export type Chats = Chat[];

export interface ChatsModel {
  chats: Chats;
}

export type Message = {
  messageId?: string;
  username: string;
  message: string;
  isMine: boolean;
};

export type Messages = Message[];

export interface ChatDisplay {
  chatImageLocation: string;
  messages: Messages;
  role: Roles;
}

export interface MemberWithAdminPrivilege {
  username: string;
  isAdmin: boolean;
  memberId: string;
}

export type MembersWithAdminPrivilege = MemberWithAdminPrivilege[];
