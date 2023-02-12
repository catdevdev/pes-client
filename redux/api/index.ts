import axios, { AxiosRequestConfig } from 'axios';
import { resourceUsage } from 'node:process';
import { setUserData } from '../actions/userProfile';
import { userProfile } from '../reducers/userProfile';
import { store } from '../store';
import {
  LoginRequest,
  RefreshRequest,
  RefreshTokenResponse,
  RegisterRequest,
  Tokens,
} from './types';

export const baseServerUrl = 'http://91.219.61.90:1234';
export const baseURL = `${baseServerUrl}/api/v1/`;

const accessTokenKey: string = 'access_token';
const refreshTokenKey: string = 'refresh_token';
const expirationDateKey: string = 'exp';

const instance = axios.create({
  baseURL,
  headers: {},
});

export class API {
  private static getAcessToken() {
    var accessToken = localStorage.getItem(accessTokenKey);
    console.log(accessToken);
    if (accessToken) {
      var expirationTime = Number(localStorage.getItem(expirationDateKey));
      var currentTime = Math.floor(Date.now() / 1000);

      if (currentTime && expirationTime) {
        if (expirationTime - currentTime > 0) {
          //accessToken have not expired
          return accessToken;
        } else {
          var refreshToken = localStorage.getItem(refreshTokenKey);
          return this.getRefreshToken(accessToken, refreshToken);
        }
      }
    }
    //if all fails

    this.redirectToLogin();
  }

  private static getRefreshToken(accessToken: string, refreshToken: string) {
    var request: RefreshRequest = {
      token: accessToken,
      refreshToken: refreshToken,
    };

    var requestConfig = {
      data: request, //body
    };

    instance
      .get<RefreshTokenResponse>('/user/refresh', requestConfig)
      .then((x) => {
        if (x.data.successfull) {
          var token = x.data.token;
          this.setTokenToLocalStorage(token);
          return token.accessToken;
        }
      })
      .catch((x) => {
        console.log(x);
      });
    //if all fails
    return this.redirectToLogin();
  }

  private static redirectToLogin() {
    store.dispatch(setUserData({ isAuthorized: false }));
    //somehow redirect user to login page to get user input and call login
    //I have no clue how to do it though
  }

  private static setTokenToLocalStorage(tokens: Tokens) {
    store.dispatch(setUserData({ isAuthorized: true }));
    localStorage.setItem(accessTokenKey, tokens.accessToken);
    localStorage.setItem(refreshTokenKey, tokens.refreshToken);
    localStorage.setItem(expirationDateKey, String(tokens.expirationStamp));
  }

  private static clearLocalStorage() {
    store.dispatch(setUserData({ isAuthorized: false }));
    localStorage.clear();
  }

  static async login(username: string, password: string) {
    var request: LoginRequest = {
      username: username,
      password: password,
    };

    var requestConfig = request;
    try {
      const res = await instance.post<Tokens>('/user/login', requestConfig);
      const tokens = res.data;
      this.setTokenToLocalStorage(tokens);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async register(username: string, password: string, pesKey: string): Promise<boolean> {
    var request: RegisterRequest = {
      username: username,
      password: password,
      pesKey: pesKey,
    };

    var requestConfig = request;

    try {
      const res = await instance.post<Tokens>('/user/register', requestConfig);
      const tokens = res.data;
      this.setTokenToLocalStorage(tokens);
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async logout(): Promise<boolean> {
    try {
      await instance.post<Tokens>('/user/logout', {}, this.getRequestConfig());
      this.clearLocalStorage();
      return true;
    } catch (error) {
      throw error;
    }
  }

  public static getRequestConfig(): AxiosRequestConfig {
    var accessToken = this.getAcessToken();
    return {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    };
  }
}

export default instance;
