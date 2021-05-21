export interface RefreshTokenResponse {
  successfull: boolean;
  token: Tokens;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  expirationStamp: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  pesKey: string;
}

export interface RefreshRequest {
  token: string;
  refreshToken: string;
}
