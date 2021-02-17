/* imports */
import Chats from "./Chats";
/* types */
import { WindowBodyType } from "../redux/actions/windowsManagement/types";

/* to refactor */
export interface Windows {
  chats: typeof Chats;
}

export const windowsVariants: Windows = {
  chats: Chats,
};
