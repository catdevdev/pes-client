/* imports */
import { useState, useEffect } from 'react';
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

  const [username, setUsername] = useState<string>('tes');
  const [password, setPassword] = useState<string>('string');
  const [repeatPassword, setRepeatPassword] = useState<string>('string');

  const createWindow = useCallWindow();

  const validateCredentials = () => {
    let validateIssue: string;
    const checkLength = () => {
      if (username.length <= 4) {
        return (validateIssue = 'Your nickname should be greater then 4');
      }
      if (password.length <= 6) {
        return (validateIssue = 'Your password should be greater then 6');
      }
    };
    const checkValidValues = () => {};
    checkLength();
    if (validateIssue) {
      createWindow<AlertWindowI | Window>({
        type: 'alert',
        isLocked: true,
        payload: { alertText: validateIssue, icon: 'error-red' },
      });
      return;
    }
  };

  const submitCredentials = async () => {
    validateCredentials();
    const a = await register(username, password);
    console.log(a);
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
              <Input style={{ width: '100%' }}></Input>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 8 }}>
              <Label style={{ marginRight: 4, width: 100 }}>Password:</Label>
              <Input style={{ width: '100%' }}></Input>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 8 }}>
              <Label style={{ marginRight: 4, width: 160 }}>Repeat Password:</Label>
              <Input style={{ width: '100%' }}></Input>
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
              <Button onClick={submitCredentials}>Enter</Button>
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                style={{ width: '100%' }}
              ></Input>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 8 }}>
              <Label style={{ marginRight: 4, width: 100 }}>Password:</Label>
              <Input
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
              <Button
                onClick={async () => {
                  console.log('hello');
                  const token = await axios.post('user/login', { username, password });
                  console.log(token);
                  // localStorage.setItem('token', );
                }}
              >
                Enter
              </Button>
            </div>
          </>
        )}
      </div>
    </WindowComponent>
  );
};

export default AuthPesSystemWindow;
