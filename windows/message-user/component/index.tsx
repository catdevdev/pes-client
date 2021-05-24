/* types */
import React, { useState, useEffect } from 'react';
import WindowComponent from '../../../components/Window';
import PesBadgeComponent, { BadgeModel } from '../../../components/Window/PesBadge';
import PesBadge from '../../../components/Window/PesBadge';
import { Window } from '../../../redux/actions/windowsManagement/types';
import { MessageUserI } from '../actions/types';
import Header from '../../../components/UI/Header';
import { getPesScore } from '../../../redux/api/service';
import Frame from '../../../components/UI/Frame';
import Fieldset from '../../../components/UI/Fieldset';

const MessageUser = (props: Window<MessageUserI>) => {
  const {
    body: {
      payload: { username },
    },
  } = props;

  return (
    <WindowComponent {...props}>
      {/* <Header text={username}></Header> */}

      <Fieldset style={{ margin: 10 }} fieldset="PES-score">
        <PesBadgeComponent username={username} />
      </Fieldset>
    </WindowComponent>
  );
};

export default MessageUser;
