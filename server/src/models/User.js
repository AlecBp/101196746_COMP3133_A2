import mongoose from "mongoose";
const { Schema } = mongoose;

export const UserSchema = new Schema(
  {
    firstName: { type: Schema.Types.String, required: true },
    lastName: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
  },
  { timestamps: true }
);
