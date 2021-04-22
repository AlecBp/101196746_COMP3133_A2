import mongoose from "mongoose";
const { Schema } = mongoose;

export const BookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    hotel: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  { timestamps: true }
);
