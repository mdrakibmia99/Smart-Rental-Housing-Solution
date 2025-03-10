import { Document, Types } from "mongoose";

export interface IRentalRequest extends Document {
  rentalHouseId: Types.ObjectId; 
  tenantId: Types.ObjectId; 
  status: "pending" | "approved" | "rejected"; 
  landlordPhone?: string; 
  paymentStatus?: "pending" | "paid"; 
  additionalMessage?: string; 
}
