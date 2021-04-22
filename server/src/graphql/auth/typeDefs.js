import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    me: User
  }

  input LoginInput {
    email: String!
    password: String!
  }

  extend type Mutation {
    login(loginInput: LoginInput!): Boolean!
    logout: Boolean!
  }
`;
