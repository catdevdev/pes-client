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
import { fetchAllChats, fetchChatById, openChatsWindow } from '../../actions';
import { createWindow, deleteWindow } from '../../../../redux/actions/windowsManagement';
/* spawn windows */
import { ChatsCreateChatI } from '../../../chats-create-chat/actions/types';
import { useCallWindow } from '../../../../callWindows';
import { createChatWindow } from '../../../chats-create-chat/actions';
import React from 'react';
import Dropdown from '../../../../components/UI/Dropdown';
import { InputDataI } from '../../../input-data/actions/types';
/* api */
import { addMessage } from '../../../../redux/api/messages';
import { store } from '../../../../redux/store';

// interface Props {
//   enterOnClick: () => void;
//   searchInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   searchInputValue: string;
// }

interface Props {
  windowId: string;
}

const MenuWithSearchBar = ({ windowId }: Props) => {
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
                style={{ width: 25, height: 25 }}
              />
              <Button style={{ width: 25, height: 25 }} />
              <Button style={{ width: 25, height: 25 }} />
              <Dropdown
                menuItems={[
                  {
                    id: 'adfs',
                    name: 'fsf',
                    onClick: () => {
                      console.log(123);
                    },
                  },
                  {
                    id: 'adddfs',
                    name: 'ddd',
                    onClick: () => {
                      console.log(123);
                    },
                  },
                  {
                    id: 'f',
                    name: 'ddd',
                    onClick: () => {
                      console.log(123);
                    },
                  },
                  {
                    id: 'gb',
                    name: 'ddd',
                    onClick: () => {
                      console.log(123);
                    },
                  },
                ]}
                style={{ margin: '2px 0 0 8px' }}
                title="Users"
              ></Dropdown>
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
          <img className={c.img} src="/images/anime_girl.jpeg" alt="" />
        </Frame>
      </div>
    </div>
  );
};

export default MenuWithSearchBar;
