export const CreateWindow = "CREATE_WINDOW";
export const CloseWindow = "CLOSE_WINDOW";

import { CreateWindowAction } from "./index";

/* windows body types */
type BodyType = "chats";
/* type */
export interface Windows {
  windows: {
    dimensions: {
      width: number | string;
      height: number | string;
      minWidth: number | string;
      minHeight: number | string;
      maxWidth: number | string;
      maxHeight: number | string;
    };
    title: {
      label: string;
      icon?: string;
    };
    options?: {
      options: [{ name: string; callback: () => void }];
    };
    body?: {
      type: BodyType;
      payload: any;
    };
  }[];
}

export type Action = CreateWindowAction;
