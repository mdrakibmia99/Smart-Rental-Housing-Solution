// Document এক্সটেন্ড করার কারণ:
// 1. Mongoose schema-এর বিল্ট-ইন প্রপার্টিগুলো (যেমন: _id, createdAt) অটোমেটিক ইনক্লুড হয়।  
// 2. Mongoose এর মেথড ও ফাংশনালিটি সহজে ব্যবহার করা যায়।  
import { Document, Types } from "mongoose";

export interface ILandlord extends Document {
  _id: Types.ObjectId;
  location: string;
  description: string;
  images: string[];
  rent: number;
  bedrooms: number;
  amenities?: string[];
  landlord: Types.ObjectId; // এখানে string-এর বদলে Types.ObjectId ব্যবহার করা হয়েছে
  contact: {
    phone: string;
    email: string;
  };
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}
