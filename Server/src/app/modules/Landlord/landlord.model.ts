import { Schema, model } from 'mongoose';
import { ILandlord } from './landlord.interface';

const landlordSchema = new Schema<ILandlord>(
  {
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    rent: { type: Number, required: true, min: 0 },
    bedrooms: { type: Number, required: true, min: 1 },
    amenities: [{ type: String }], // List of amenities (e.g., ["WiFi", "Parking"])
    landlord: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);
const Landlord = model<ILandlord>('Landlord', landlordSchema);
export default Landlord
