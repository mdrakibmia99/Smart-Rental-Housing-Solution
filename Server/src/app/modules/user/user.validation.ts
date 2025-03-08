import { z } from 'zod';

export const UserRoleEnum = z.enum(['landlord', 'tenant']);
// User Validation Schema
export const UserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name must be at least 3 characters').max(50),
    email: z.string().email('Invalid email format'),
    phone: z.string().min(11, 'Phone number must be at least 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: UserRoleEnum.default('tenant'),
  }),
});

// Validation for User Login
export const UserLoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});



export const userValidation = {
  UserValidationSchema,
  UserLoginSchema
};
