import mongoose from "mongoose";
import { UserSchema } from "./User";
import { BookingSchema } from "./Booking";
import { HotelSchema } from "./Hotel";

module.exports = {
  User: mongoose.model("User", UserSchema),
  Booking: mongoose.model("Booking", BookingSchema),
  Hotel: mongoose.model("Hotel", HotelSchema),
};
