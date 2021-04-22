import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String!
  }
  extend type Query {
    users: [User]
    user(id: ID!): User
  }

  input SignupInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Token {
    token: String!
  }

  extend type Mutation {
    signup(signupInput: SignupInput!): User
  }
`;
