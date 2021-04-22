import { verify } from "jsonwebtoken";

export const authCtx = req => {
  const token = req.cookies[process.env.COOKIE];
  // const authHeader = req.get("authorization");
  const context = { isAuth: false, userId: null };
  if (!token) {
    return context;
  }

  // const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    console.log("AuthCtx Error:  token not found");
    return context;
  }

  let payload;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    console.log("AuthCtx Error:  JsonWebTokenError: invalid signature");
    return context;
  }

  if (!payload) {
    return context;
  }

  context.isAuth = true;
  context.userId = payload.userId;
  return context;
};
