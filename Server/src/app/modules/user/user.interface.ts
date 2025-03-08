/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  LANDLORD = 'landlord',
  TENANT='tenant'
}
//create a interface for user
export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'landlord' | 'tenant';
  isVerified: boolean;
  isDelete: boolean;
  createdAt?: Date;
}

export interface UserModel extends Model<IUser> {
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isUserExistsByEmail(id: string): Promise<IUser>;
  checkUserExist(userId: string): Promise<IUser>;
}
