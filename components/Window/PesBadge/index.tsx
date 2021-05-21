import { useEffect, useState } from 'react';
import { getPesScore } from '../../../redux/api/service';
import { resolveLocation } from '../../../utils';
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
    const response = await getPesScore(username);
    setBadge(response);
  };

  useEffect(() => {
    fetchPesScore();
  }, []);

  return (
    <>
      {pesScore && (
        <div className={c.Container}>
          <img src={resolveLocation(pesScore.badgeLocation)} className={c.image}></img>
          <div className={c.title}>{pesScore.title}</div>
          <div className={c.barWrapper}>
            <ProgressBar percentage={pesScore.score}></ProgressBar>
          </div>
        </div>
      )}
    </>
  );
};
export default PesBadgeComponent;
