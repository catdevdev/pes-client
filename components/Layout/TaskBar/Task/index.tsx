/* imports */
import c from './index.module.scss';
/* UI */
import Frame from '../../../UI/Frame';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../../redux/reducers';
import { selectWindow } from '../../../../redux/actions/windowsManagement';

interface Props {
  windowId: string;
  children: JSX.Element;
}

const Task = ({ windowId }: Props) => {
  const dispatch = useDispatch();

  const windows = useSelector((state: StoreState) => state.windowsManagement);
  const window = windows.find(({ id }) => id === windowId);
  const {
    title: { label },
    isActive,
  } = window;

  return (
    <>
      <Frame
        onClick={() => {
          dispatch(selectWindow(windowId));
        }}
        style={{
          marginLeft: 4,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          width: 140,
          height: 24,
        }}
        withBoxShadow={isActive}
      >
        <p className={c.name}>{label}</p>
      </Frame>
    </>
  );
};

export default Task;
