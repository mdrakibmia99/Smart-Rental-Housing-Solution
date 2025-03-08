import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import config from '../../config';
import { createHashPassword } from '../../utils/createHashPassword';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { comparePassword } from '../../utils/comparePassword';
const userSchema = new Schema<IUser,UserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["landlord", "tenant"],
      default: "tenant"
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    isDelete: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  },
);
userSchema.pre('save', async function (next) {
  this.password = await createHashPassword(
    this.password,
    config.bcrypt_salt_round as string,
  );

  next();
});

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await comparePassword(plainTextPassword, hashedPassword);
};

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

userSchema.statics.checkUserExist = async function (userId: string) {
  const existingUser = await this.findById(userId);

  if (!existingUser) {
     throw new AppError(StatusCodes.NOT_ACCEPTABLE, 'User does not exist!');
  }

  if (!existingUser.isDelete) {
     throw new AppError(StatusCodes.NOT_ACCEPTABLE, 'User is deleted by admin!');
  }

  return existingUser;
};
const User = model<IUser,UserModel>('User', userSchema);
export default User;
