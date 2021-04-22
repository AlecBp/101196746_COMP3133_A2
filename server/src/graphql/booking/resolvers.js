import { Booking } from "../../models";
import { ForbiddenError } from "apollo-server-express";

export const resolvers = {
  Query: {
    bookings: () => {
      return Booking.find();
    },
    userBooking: (_, { userId }) => {
      return Booking.find({ user: userId });
    },
    hotelBooking: (_, { hotelId }) => {
      return Booking.find({ hotel: hotelId });
    },
  },
  Mutation: {
    addBooking: async (_, { bookingInput }) => {
      const booking = await new Booking(bookingInput);
      return booking.save();
    },
  },
  Booking: {
    user: async (booking, _) => {
      return (await booking.populate("user").execPopulate()).user;
    },
    hotel: async (booking, _) => {
      return (await booking.populate("hotel").execPopulate()).hotel;
    },
  },
};
