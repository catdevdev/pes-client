import React, { useEffect, useState } from 'react';
import { getPesScore } from '../../../redux/api/service';
import { resolveLocation } from '../../../utils';
import Frame from '../../UI/Frame';
import Label from '../../UI/Label';
import { ProgressBar } from '../../UI/ProgressBar';

import c from './index.module.scss';

export interface BadgeModel {
  score: number;
  badgeLocation: string;
  title: string;
}

export interface Props {
  username: string;
}

const PesBadgeComponent = ({ username }: Props) => {
  const [pesScore, setBadge] = useState<BadgeModel>(null);

  const fetchPesScore = async () => {
    if (username) {
      const response = await getPesScore(username);
      setBadge(response);
    }
  };

  useEffect(() => {
    fetchPesScore();
  }, [username]);

  return (
    <>
      {pesScore && (
        <div className={c.container}>
          <Frame style={{ background: '#fff' }} withBoxShadow>
            <Label className={c.nickname}>🎉{username}🎉</Label>
            <img src={resolveLocation(pesScore.badgeLocation)} className={c.image}></img>
          </Frame>
          <ProgressBar style={{ marginTop: 14 }} percentage={pesScore.score}></ProgressBar>
        </div>
      )}
    </>
  );
};
export default PesBadgeComponent;
