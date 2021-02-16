export const CreateWindow = "CREATE_WINDOW";
export const CloseWindow = "CLOSE_WINDOW";

import { CreateWindowAction } from "./index";

/* windows body type */
export enum Bodies {
  ChatsList,
}

/* type */
export interface Window {
  dimensions: {
    width: number | string;
    height: number | string;
    minWidth: number | string;
    minHeight: number | string;
  };
  title: {
    label: string;
    icon: string;
  };
  options?: {
    options: [{ name: string; callback: () => void }];
  };
  body?: {
    type: Bodies;
    data: any;
  };
}

export type Action = CreateWindowAction;
