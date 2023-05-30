import { IUser } from "./users.interface";
import User from "./users.model";

export const getAllUser = async (): Promise<IUser[]> => {
  return User.find();
};
