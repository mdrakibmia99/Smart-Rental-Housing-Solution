
import { Document, Types } from 'mongoose';

export interface ILandlord extends Document {
  _id: Types.ObjectId;
  location: string;
  description: string;
  images: string[];
  rent: number;
  bedrooms: number;
  amenities?: string[];
  landlord: Types.ObjectId; 
  phone: string;
  email: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}
