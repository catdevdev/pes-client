/* types */
import { useState, useEffect } from 'react';
import WindowComponent from '../../../components/Window';
import PesBadgeComponent, { BadgeModel } from '../../../components/Window/PesBadge';
import PesBadge from '../../../components/Window/PesBadge';
import { Window } from '../../../redux/actions/windowsManagement/types';
import { MessageUserI } from '../actions/types';
import Header from '../../../components/UI/Header';
import { getPesScore } from '../../../redux/api/service';

const MessageUser = (props: Window<MessageUserI>) => {
  const {
    body: {
      payload: {
        payload: { username },
      },
    },
  } = props;

  console.log(props);

  const [pesScore, setBadge] = useState<BadgeModel>(null);

  const fetchPesScore = async () => {
    const response = await getPesScore(username);
    setBadge(response);
  };

  useEffect(() => {
    fetchPesScore();
  }, []);

  return (
    <WindowComponent {...props}>
      <Header text={username}></Header>
      {pesScore != null && <PesBadgeComponent {...pesScore} />}
    </WindowComponent>
  );
};

export default MessageUser;
