import { User } from "../../models";
import { hash } from "bcryptjs";
import { ForbiddenError } from "apollo-server-express";

export const resolvers = {
  Query: {
    users: (_, __, { auth }) => {
      if (!auth.isAuth) {
        throw new ForbiddenError("ACCESS DENIED, LOGIN REQUIRES");
      }
      return User.find({});
    },
    user: (_, { id }, { auth }) => {
      if (!auth.isAuth) {
        throw new ForbiddenError("ACCESS DENIED, LOGIN REQUIRES");
      }
      return User.findById(id);
    },
  },
  Mutation: {
    signup: async (
      _,
      { signupInput: { firstName, lastName, email, password } }
    ) => {
      const hashedPwd = await hash(password, 12);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPwd,
      });
      return newUser.save();
    },
  },
  User: {
    fullName: (parent, _) => `${parent.firstName} ${parent.lastName}`,
  },
};
