import { Schema, model } from "mongoose";
import { IUser } from "./users.interface";

// create user schema
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create the model and export it
const User = model<IUser>("User", userSchema);
export default User;
