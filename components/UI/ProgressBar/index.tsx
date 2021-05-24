/* imports */
import React from 'react';
import Frame from '../Frame';
import c from './index.module.scss';

interface Props {
  percentage: number;
}

interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ProgressBar = (props: Props) => {
  return (
    <div {...props} className={c.progressBar}>
      <Frame style={{ width: '100%', background: '#fff' }} withBoxShadow>
        <div style={{ width: 50, background: '#0236F0' }}>12312</div>
        {/* <Filler percentage={props.percentage} /> */}
      </Frame>
    </div>
  );
};

const Filler = (props: Props) => {
  return <div className={c.filler} style={{ width: `${props.percentage}%` }}></div>;
};
