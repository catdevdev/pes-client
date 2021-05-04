/* imports */
import c from './index.module.scss';

interface Props {
  percentage: number;
}

export const ProgressBar = (props: Props) => {
  <div className={c.progressBar}>
    <Filler percentage={props.percentage} />
  </div>;
};

const Filler = (props: Props) => {
  return <div className={c.filler} style={{ width: `${props.percentage}%` }}></div>;
};
