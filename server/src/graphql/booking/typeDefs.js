import { gql } from "apollo-server-express";

export const typeDefs = gql`  
  type Booking {
    id: ID!
    user: User!
    hotel: Hotel!
    start: String!
    end: String!
    createdAt: String!
    updatedAt: String!
  }

  input BookingInput {
    user: ID!
    hotel: ID!
    start: String!
    end: String!
  }

  extend type Query {
    bookings: [Booking]
    userBooking(userId: ID!): [Booking]
    hotelBooking(hotelId: ID!): [Booking]
  }

  extend type Mutation {
    addBooking(bookingInput: BookingInput!): Booking
  }
`;
