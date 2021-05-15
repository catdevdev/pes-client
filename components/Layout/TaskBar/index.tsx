/* imports */
import c from './index.module.scss';
/* UI */
import Button from '../../UI/Button';
import Task from './Task';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../redux/reducers';
import { memo } from 'react';

const TaskBar = () => {
  const windows = useSelector((state: StoreState) => state.windowsManagement);
  return (
    <div className={c.wrapper}>
      <div className={c.container}>
        <Button style={{ fontWeight: 700, width: 54, height: 24 }}>Start</Button>
        <div className={c.tasksWrapper}>
          {windows.map(({ id, title: { label } }) => {
            return <Task key={id} windowId={id} />;
          })}
        </div>
      </div>

      <div className={c.time}>11:39 PM</div>
    </div>
  );
};

export default memo(TaskBar);
