/* imoprts */
import c from './index.module.scss';
import { nanoid } from 'nanoid';
/* UI Window */
import Separator from '../../../../components/Window/Separator';
/* UI */
import Button from '../../../../components/UI/Button';
import Frame from '../../../../components/UI/Frame';
import Input from '../../../../components/UI/Input';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* redux types */
import { Window } from '../../../../redux/actions/windowsManagement/types';
import { StoreState } from '../../../../redux/reducers';
import { ChatsWindowI } from '../../actions/types';
import { fetchAllChats, fetchChatById, fetchChatsByTerm, openChatsWindow } from '../../actions';
import { createWindow, deleteWindow } from '../../../../redux/actions/windowsManagement';
/* spawn windows */
import { ChatsCreateChatI } from '../../../chats-create-chat/actions/types';
import { useCallWindow } from '../../../../hooks/callWindows';
import { createChatWindow } from '../../../chats-create-chat/actions';
import React, { memo } from 'react';
import Dropdown from '../../../../components/UI/Dropdown';
import { InputDataI } from '../../../input-data/actions/types';
/* api */
import { addMessage } from '../../../../redux/api/messages';
import { store } from '../../../../redux/store';
import { ChatSettingsI } from '../../../chat-settings/actions/types';
import { resolveLocation } from '../../../../utils';

// interface Props {
//   enterOnClick: () => void;
//   searchInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   searchInputValue: string;
// }

interface Props {
  windowId: string;
  isUsersLoading: boolean;
}

const MenuWithSearchBar = ({ windowId, isUsersLoading }: Props) => {
  const windows = useSelector((state: StoreState<ChatsWindowI>) => state.windowsManagement);
  const {
    body: {
      payload: {
        pages: { _404page, Chat, Chats },
      },
    },
  } = windows.find(({ id }) => {
    return windowId === id;
  });

  const windowsInputMessage = useSelector(
    (state: StoreState<InputDataI>) => state.windowsManagement,
  );

  const { members } = useSelector(
    (state: StoreState<ChatsWindowI>) =>
      state.windowsManagement.find(({ id }) => id === windowId).body.payload.pages.Chat.members,
  );

  const dispatch = useDispatch();

  const createWindow = useCallWindow();

  return (
    <div className={c.wrapper}>
      <div className={c.leftContainer}>
        <div className={c.menuContainer}>
          {Chat.isCurrentPage && (
            <>
              <Button
                onClick={() => {
                  const windowInputId = nanoid();
                  createWindow<InputDataI | Window>({
                    id: windowInputId,
                    type: 'input-data',
                    payload: {
                      alertText: `Just enter  message \n
                                    tip: please write nice message`,
                      inputField: 'textarea',
                      buttonText: 'Add',
                      icon: 'information',
                      onButtonClick: async () => {
                        await addMessage(
                          Chat.chatId,
                          store.getState().windowsManagement.find(({ id }) => id === windowInputId)
                            .body.payload.data,
                        );
                        dispatch(fetchChatById(windowId, Chat.chatId));
                        dispatch(deleteWindow(windowInputId));
                      },
                    },
                  });
                }}
                imageUrl="https://win98icons.alexmeub.com/icons/png/write_wordpad-1.png"
                style={{ width: 25, height: 25 }}
              />
              <Button style={{ width: 25, height: 25, marginLeft: 4 }} />
              <Button style={{ width: 25, height: 25 }} />
              <Button
                style={{ width: 25, height: 25, marginLeft: 4 }}
                onClick={() => {
                  createWindow<ChatSettingsI | Window>({
                    type: 'chat-settings',
                    payload: {
                      relatedWindowId: windowId,
                    },
                  });
                }}
              />
              <Dropdown
                isLoading={isUsersLoading}
                menuItems={members.map(({ username, isAdmin }) => ({
                  id: nanoid(),
                  name: username,
                  onClick: () => {
                    console.log(username);
                    createWindow({ type: 'message-user', payload: { username } });
                  },
                }))}
                style={{ margin: '2px 0 0 8px' }}
                title="Users"
              />
            </>
          )}
          {Chats.isCurrentPage && (
            <>
              <Button
                onClick={() => {
                  const chatId = nanoid();
                  createWindow<ChatsCreateChatI | Window>({
                    id: chatId,
                    type: 'chats-create-chat',
                    payload: {
                      relatedWindowId: windowId,
                      onFinishedCreate: () => {
                        dispatch(fetchAllChats(windowId));
                      },
                      chatName: '',
                      chatPassword: '',
                    },
                  });
                }}
                style={{ width: 25, height: 25 }}
                imageUrl="https://win98icons.alexmeub.com/icons/png/directory_net_web-3.png"
              />
              <Button
                onClick={() => {
                  const chatId = nanoid();
                  createWindow<InputDataI | Window>({
                    id: chatId,
                    type: 'input-data',
                    payload: {
                      alertText: `Enter chat which you want to find`,
                      inputField: 'input',
                      buttonText: 'Find',
                      icon: 'information',
                      onButtonClick: async () => {
                        const term = store
                          .getState()
                          .windowsManagement.find(({ id }) => id === chatId).body.payload.data;
                        dispatch(fetchChatsByTerm(windowId, term));
                        dispatch(deleteWindow(chatId));
                      },
                    },
                  });
                }}
                style={{ width: 25, height: 25, marginLeft: 4 }}
                imageUrl="https://win98icons.alexmeub.com/icons/png/magnifying_glass_4-1.png"
              />
            </>
          )}
        </div>
        <Separator />
        <div className={c.searchContainer}>
          {Chat.isCurrentPage && (
            <Button
              onClick={() => {
                dispatch(openChatsWindow(windowId));
              }}
              style={{ width: 60, height: 25, marginRight: 6 }}
            >
              Go back
            </Button>
          )}
          {Chats.isCurrentPage && (
            <Button onClick={() => {}} style={{ width: 60, height: 25, marginRight: 6 }}>
              Join
            </Button>
          )}
          <Input
            value={`chat/${Chat.chatId}`}
            onChange={() => {}}
            style={{ height: 25, flex: 1, marginRight: 4 }}
          />
        </div>
      </div>

      <div className={c.rightContainer}>
        <Frame withBoxShadow style={{ width: 60, height: 60 }}>
          <img
            className={c.img}
            src={
              Chat.isCurrentPage
                ? resolveLocation(Chat.chatImageLocation)
                : '/images/anime_girl.jpeg'
            }
            alt="Logo"
          />
        </Frame>
      </div>
    </div>
  );
};

export default memo(MenuWithSearchBar);
