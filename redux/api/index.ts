import axios, { AxiosRequestConfig } from "axios";
import { LoginRequest, RefreshRequest, RefreshTokenResponse, Token } from "./types";


export const baseUrl = 'http://134.249.99.75:5001/api/v1/';
const accessTokenKey: string = "access_token";
const refreshTokenKey: string = "refresh_token";
const expirationDateKey: string = "exp";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {},
});


export class API {
  private getAcessToken() {
    var accessToken = localStorage.getItem(accessTokenKey);

    if (accessToken != null) {
      var expirationTime = Number(localStorage.getItem(expirationDateKey));
      var currentTime = Math.floor(Date.now() / 1000);
      if (currentTime && expirationTime) {
        if (expirationTime - currentTime) //accessToken have not expired
        {
          return accessToken;
        }
        else {
          var refreshToken = localStorage.getItem(refreshTokenKey);
          return this.getRefreshToken(accessToken, refreshToken);
        }
      }
    }
    //if all fails
    this.redirectToLogin();
  }

  private getRefreshToken(accessToken: string, refreshToken: string) {
    var request: RefreshRequest = {
      token: accessToken,
      refreshToken: refreshToken
    }

    var requestConfig = {
      data: request //body
    };

    axios.get<RefreshTokenResponse>("/user/refresh", requestConfig)
      .then(x => {
        if (x.data.successfull) {
          var token = x.data.token;
          this.setTokenToLocalStorage(token);
          return token.accessToken;
        }
      })
      .catch(x => {
        console.log(x)
      })
    //if all fails
    return this.redirectToLogin();
  }

  private redirectToLogin() {
    //somehow redirect user to login page to get user input and call login
    //I have no clue how to do it though
  }

  private setTokenToLocalStorage(token: Token) {
    localStorage.setItem(accessTokenKey, token.accessToken);
    localStorage.setItem(refreshTokenKey, token.refreshToken);
    localStorage.setItem(expirationDateKey, String(token.expirationStamp));
  }

  public login(username: string, password: string) {
    var request: LoginRequest = {
      username: username,
      password: password
    };

    var requestConfig = {
      data: request //body
    };

    axios.get<Token>("/user/login", requestConfig)
      .then(x => {
        var token = x.data;
        this.setTokenToLocalStorage(token);
      })
      .catch(x => {
        console.log(x)
      })
  }

  public getRequestConfig(): AxiosRequestConfig {
    var accessToken = this.getAcessToken();
    return {
      headers: {
        "Authorization": "Bearer " + accessToken
      }
    }
  }
}

export default instance;