export const CreateWindow = "CREATE_WINDOW";
export const CloseWindow = "CLOSE_WINDOW";

import { CreateWindowAction } from "./index";

/* windows body types */
export type WindowBodyType = "chats";
/* type */
export interface Window {
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
    name: string;
    onClick: () => void;
  }[];
  body?: {
    type: WindowBodyType & string;
    payload: any;
  };
}

export type Action = CreateWindowAction;
