import { Types } from 'mongoose';
import { IUser } from './user.interface';
import User from './user.model';
type UserPayload = {
  _id: Types.ObjectId;
  name: string;
  email: string;
};
const createUser = async (payload: IUser): Promise<UserPayload> => {
  const result = await User.create(payload);
  return result;
};

const authMe = async (userId: string) => {
  const user = await User.findById(userId).select('-password');
  return user;
};
const profileUpdate = async (
  userId: string,
  payload: Record<string, unknown>,
) => {
  const result = await User.findByIdAndUpdate(userId, payload, { new: true });
  return result;
};

export const userService = {
  createUser,
  authMe,
  profileUpdate
};
