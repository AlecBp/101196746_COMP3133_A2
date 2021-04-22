import { ForbiddenError } from "apollo-server-express";
import { User } from "../../models";
import { compare } from "bcryptjs";
import { AuthService } from "../../service/auth";

export const resolvers = {
  Query: {
    me: (_, __, { auth }) => {
      if (!auth.isAuth) {
        throw new ForbiddenError("ACCESS DENIED, LOGIN REQUIRES");
      }
      return User.findById(auth.userId);
    },
  },
  Mutation: {
    login: async (_, { loginInput: { email, password } }, { auth, res }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found, check your email plz");
      }

      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Wrong credential, check your email or password");
      }

      const token = AuthService.createRefreshToken(user);
      AuthService.sendRefreshToken(res, token);

      return true;
    },
    logout: (_, __, { res }) => {
      AuthService.clearCookie(res);
      return true;
    },
  },
};
