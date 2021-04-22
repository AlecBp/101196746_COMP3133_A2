import { sign } from "jsonwebtoken";

export const AuthService = {
  createRefreshToken: user => {
    return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.REFRESH_TOKEN_DURATION,
    });
  },
  sendRefreshToken: (res, token) => {
    res.cookie(process.env.COOKIE, token, {
      httpOnly: true,
      maxAge: 900000,
    });
  },
  clearCookie: res => {
    res.cookie(process.env.COOKIE, "", {
      httpOnly: true,
    });
  },
};
