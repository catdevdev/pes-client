export interface RefreshTokenResponse {
  successfull: boolean;
  token: Token;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
  expirationStamp: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RefreshRequest {
  token: string;
  refreshToken: string;
}