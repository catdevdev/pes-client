/* types */
import WindowComponent from '../../../components/Window';
import PesBadgeComponent from '../../../components/Window/PesBadge';
import PesBadge from '../../../components/Window/PesBadge';
import { Window } from '../../../redux/actions/windowsManagement/types';
import { MessageUserI } from '../actions/types';
import Header from '../../../components/UI/Header';

const MessageUser = (props: Window<MessageUserI>) => {
  const {
    body: {
      payload: { username },
    },
  } = props;

  return (
    <WindowComponent {...props}>
      <Header text={username}></Header>
      <PesBadgeComponent score={60} title={'Emerald Doge'} badgeLocation={'./images/Emerald.png'} />
    </WindowComponent>
  );
};

export default MessageUser;
