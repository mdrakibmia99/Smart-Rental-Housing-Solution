export interface IUser {
    name: string;
    email: string;
    phone?: string;
    password: string;
    role: 'landlord' | 'tenant' | 'admin';
    isVerified: boolean;
    isBlocked: boolean;
    address?: string | null;
    city?: string | null;
    image?: string[] | null;
    lastLogin?: Date;
    createdAt?: Date;
  }