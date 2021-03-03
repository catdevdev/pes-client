/* UI Window */
import WindowComponent from '../../../components/Window';
/* UI */
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ChatsWindowI } from '../../../windows/chats/actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';

const ChatsAddMessageWindow = (props: Window<ChatsWindowI>) => {
  const {
    body: {
      payload: {
        pages: { _404page, Chat, Chats },
      },
    },
  } = props;

  return (
    <WindowComponent {...props}>
      <div>add message</div>
      <Input />
    </WindowComponent>
  );
};

export default ChatsAddMessageWindow;
