import {Hotel} from "../../models";
import {ForbiddenError} from "apollo-server-express";

export const resolvers = {
  Query: {
    hotels: (_, __, {auth}) => {
      return Hotel.find();
    },
    hotel: (_, {id}, {auth}) => {
      return Hotel.findById(id);
    },
    hotelByName: (_, {name}, {auth}) => {
      return Hotel.find({name})
      // return Hotel.findOne({name});
    },
    hotelByCity: (_, {city}, {auth}) => {
      return Hotel.find({city})
      // return Hotel.findOne({city});
    },
  },
  Mutation: {
    addHotel: async (_, {hotelInput}, {auth}) => {
      const user = await new Hotel(hotelInput);
      return user.save();
    },
  },
  Hotel: {
    address: (parent, _) => `${parent.street} ${parent.city} ${parent.postalCode}`,
  }
};
