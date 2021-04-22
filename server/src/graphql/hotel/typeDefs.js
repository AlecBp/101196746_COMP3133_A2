import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Hotel {
    id: ID!
    name: String!
    street: String!
    city: String!
    postalCode: String!
    price: Float!
    email: String!
    createdAt: String!
    updatedAt: String!
    address: String!
  }

  input HotelInput {
    name: String!
    street: String!
    city: String!
    postalCode: String!
    price: Float!
    email: String!
  }

  extend type Query {
    hotels: [Hotel]
    hotel(id: ID!): Hotel
    hotelByName(name: String!): [Hotel]
    hotelByCity(city: String!): [Hotel]
  }

  extend type Mutation {
    addHotel(hotelInput: HotelInput!): Hotel
  }
`;
