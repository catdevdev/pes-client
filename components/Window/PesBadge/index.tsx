import { ProgressBar } from '../../UI/ProgressBar';

import c from './index.module.scss';

interface BadgeModel {
  score: number;
  badgeLocation: string;
  title: string;
}

const PesBadgeComponent = (props: BadgeModel) => {
  return (
    <div className={c.Container}>
      <img src={props.badgeLocation} className={c.image}></img>
      <div className={c.title}>{props.title}</div>
      <div className={c.barWrapper}>
        <ProgressBar percentage={props.score}></ProgressBar>
      </div>
    </div>
  );
};

export default PesBadgeComponent;
