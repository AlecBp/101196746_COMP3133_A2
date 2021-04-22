import mongoose from "mongoose";
const { Schema } = mongoose;

export const HotelSchema = new Schema(
  {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    price: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
