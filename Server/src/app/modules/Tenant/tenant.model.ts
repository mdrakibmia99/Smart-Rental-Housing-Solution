import { Schema, model } from 'mongoose';
import { IRentalRequest } from './tenant.interface';

const TenantSchema = new Schema<IRentalRequest>(
  {
    rentalHouseId: {
      type: Schema.Types.ObjectId,
      ref: 'Landlord',
      required: true,
    },
    tenantId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    landlordPhone: { type: String },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid'],
      default: 'pending',
    },
    additionalMessage: { type: String, trim: true },
  },
  { timestamps: true },
);
const Tenant = model<IRentalRequest>('Tenant', TenantSchema);
export default Tenant;
