import { z } from 'zod';

export const updateLandlordValidationSchema = z.object({
  location: z.string().trim().optional(),
  description: z.string().trim().optional(),
  images: z.array(z.string().url({ message: 'Invalid image URL' })).optional(),
  rent: z.number().min(0, { message: 'Rent must be 0 or more' }).optional(),
  bedrooms: z
    .number()
    .min(1, { message: 'At least 1 bedroom is required' })
    .optional(),
  amenities: z.array(z.string()).optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: 'Invalid email format' }).optional(),
  isAvailable: z.boolean().optional(),
});
export const landlordValidation = {
  updateLandlordValidationSchema,
};
