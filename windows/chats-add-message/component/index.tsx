/* UI Window */
import WindowComponent from '../../../components/Window';
/* UI */
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { ChatsWindowI } from '../../../windows/chats/actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';

const ChatsAddMessageWindow = (props: Window) => {
  // const {
  //   body: {
  //     payload: {
  //       pages: { _404page, Chat, Chats },
  //     },
  //   },
  // } = props;

  return (
    <WindowComponent {...props}>
      <div>Add message</div>
      <Input />
      <Button>Enter</Button>
    </WindowComponent>
  );
};

export default ChatsAddMessageWindow;
