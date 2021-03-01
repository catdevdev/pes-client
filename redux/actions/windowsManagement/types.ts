export const CreateWindow = "CREATE_WINDOW";
export const DeleteWindow = "DELETE_WINDOW";
export const SelectWindow = "SELECT_WINDOW";

/* types */
import {
  CreateWindowAction,
  DeleteWindowAction,
  SelectWindowAction,
} from "./index";

/* windows body types */
export type WindowBodyType = "chats";
/* type */
export interface Window<I = any> {
  id?: string;
  dimensions: {
    width: number | string;
    height: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
  };
  title: {
    label: string;
    icon?: string;
  };
  options?: {
    id?: string;
    name: string;
    onClick: () => void;
  }[];
  isActive?: boolean;
  zIndex?: number;

  body: I
}

export interface ChatsWindowI {
  type: "chats",
  payload: {
    searchText: string;
    // enterOnClick: () => void;

    pages: {
      _404page: {
        errorText?: string;
        isCurrentPage: boolean;
      };
      Chat: {
        messages: { username: string; message: string }[];
        isCurrentPage: boolean;
      };
      Chats: {
        chats: {
          chatId: string;
          chatName: string;
        }[];
        isCurrentPage: boolean;
      };
    };
  }

}

export type Action =
  | CreateWindowAction<ChatsWindowI>
  | DeleteWindowAction
  | SelectWindowAction;
