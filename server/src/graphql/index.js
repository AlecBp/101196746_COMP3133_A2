import { gql } from "apollo-server-express";

import user from "./user";
import auth from "./auth";
import hotel from "./hotel";
import booking from "./booking";

const resolvers = [
  user.resolvers,
  auth.resolvers,
  hotel.resolvers,
  booking.resolvers,
];

const typeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  ${user.typeDefs}
  ${auth.typeDefs}
  ${hotel.typeDefs}
  ${booking.typeDefs}
`;

module.exports = {
  resolvers,
  typeDefs,
};
