/* imports */
import { useState, useEffect } from 'react';
/* utils */
import { nanoid } from 'nanoid';
/* UI Window */
import WindowComponent from '../../../components/Window';
import Separator from '../../../components/Window/Separator';
import Options from '../../../components/Window/Options';
/* UI */
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import Label from '../../../components/UI/Label';
/* types */
import { Window } from '../../../redux/actions/windowsManagement/types';
import { AuthPesSystemWindowI } from '../actions/types';
/* redux */
import { useSelector, useDispatch } from 'react-redux';
/* actions  */
import { deleteWindow } from '../../../redux/actions/windowsManagement';
/* axios */
import axios from '../../../redux/api';
/* spawn windows hook */
import { useCallWindow } from '../../../callWindows';
/* windows types */
import { AlertWindowI } from '../../../windows/alert/actions/types';
/* api */
import { login, register, refresh_token } from '../../../redux/api/auth';

const AuthPesSystemWindow = (props: Window<AuthPesSystemWindowI>) => {
  const [currentPage, setCurrentPage] = useState<'register' | 'login'>('register');

  const [titleLabel, setTitleLabel] = useState<
    'Register new account in PES system' | 'Login into PES system'
  >('Register new account in PES system');

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const dispatch = useDispatch();
  const createWindow = useCallWindow();

  const submitCredentialsRegister = async () => {
    try {
      const { data } = await register(username, password);
      console.log(data);
      localStorage.setItem('token', data.accessToken);
      dispatch(deleteWindow(props.id));
      const id = nanoid();
      createWindow<AlertWindowI | Window>({
        id,
        type: 'alert',
        isLocked: true,
        payload: {
          alertText: '🐶 Account successfully registered 🐶',
          icon: 'information',
          onButtonClick: () => {
            dispatch(deleteWindow(id));
          },
        },
      });
    } catch (err) {
      const id = nanoid();
      createWindow<AlertWindowI | Window>({
        id,
        type: 'alert',
        isLocked: true,
        payload: {
          alertText: err.response.data.title,
          icon: 'error-red',
          onButtonClick: () => {
            dispatch(deleteWindow(id));
          },
        },
      });
    }
  };

  const submitCredentialsLogin = async () => {
    try {
      const { data } = await login(username, password);
      localStorage.setItem('token', data.accessToken);
      dispatch(deleteWindow(props.id));
      const id = nanoid();
      createWindow<AlertWindowI | Window>({
        id,
        type: 'alert',
        isLocked: true,
        payload: {
          alertText: '🐶 You successfully logged in PES-system 🐶',
          icon: 'information',
          onButtonClick: () => {
            dispatch(deleteWindow(id));
          },
        },
      });
    } catch (err) {
      const id = nanoid();
      createWindow<AlertWindowI | Window>({
        id,
        type: 'alert',
        isLocked: true,
        payload: {
          alertText: err.response.data.title,
          icon: 'error-red',
          onButtonClick: () => {
            dispatch(deleteWindow(id));
          },
        },
      });
    }
  };

  useEffect(() => {
    if (currentPage === 'register') {
      return setTitleLabel('Register new account in PES system');
    }
    if (currentPage === 'login') {
      return setTitleLabel('Login into PES system');
    }
  }, [currentPage]);

  return (
    <WindowComponent {...props} title={{ label: titleLabel }}>
      <Options options={[{ name: 'help', onClick: () => console.log('text') }]} />
      <Separator />
      <div style={{ padding: 8, height: 0, flex: 1 }}>
        {currentPage === 'register' && (
          <>
            <Label>Type a credentials to create your identity in PES system.</Label>
            <Label style={{ marginTop: 8 }}>
              Tip: Write a good nickname so that you are not ashamed to show it to others{' '}
            </Label>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 18 }}>
              <Label style={{ marginRight: 4, width: 100 }}>Nickname:</Label>
              <Input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                style={{ width: '100%' }}
              ></Input>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 8 }}>
              <Label style={{ marginRight: 4, width: 100 }}>Password:</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{ width: '100%' }}
              ></Input>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 8 }}>
              <Label style={{ marginRight: 4, width: 160 }}>Repeat Password:</Label>
              <Input
                type="password"
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                }}
                style={{ width: '100%' }}
              ></Input>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 8,
                marginBottom: 12,
              }}
            >
              <Button onClick={() => setCurrentPage('login')} style={{ width: 160 }}>
                Login (if you have account)
              </Button>
              <Button onClick={submitCredentialsRegister}>Register</Button>
            </div>
          </>
        )}
        {currentPage === 'login' && (
          <>
            <Label>Type a credentials to create your identity in PES system.</Label>
            <Label style={{ marginTop: 8 }}>
              Tip: If you don’t have credentials - please register a new account
            </Label>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 18 }}>
              <Label style={{ marginRight: 4, width: 100 }}>Nickname:</Label>
              <Input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                style={{ width: '100%' }}
              ></Input>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 8 }}>
              <Label style={{ marginRight: 4, width: 100 }}>Password:</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{ width: '100%' }}
              ></Input>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 8,
                marginBottom: 12,
              }}
            >
              <Button onClick={() => setCurrentPage('register')} style={{ width: 160 }}>
                Register a new acount
              </Button>
              <Button onClick={submitCredentialsLogin}>Login</Button>
            </div>
          </>
        )}
      </div>
    </WindowComponent>
  );
};

export default AuthPesSystemWindow;
