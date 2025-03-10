import { z } from "zod";

export const createRentalRequestSchema = z.object({
  rentalHouseId: z.string().min(24, "Invalid rental house ID"),
  additionalMessage: z.string().max(500, "Message too long")
});

export const updateRentalRequestSchema = z.object({
  status: z.enum(["pending", "approved", "rejected"], { message: "Invalid status" }),
  landlordPhone: z.string().min(10, "Invalid phone number").optional(),
  paymentStatus: z.enum(["pending", "paid"]).optional(),
});



export const TenantValidation = {
    createRentalRequestSchema,
    updateRentalRequestSchema

  }