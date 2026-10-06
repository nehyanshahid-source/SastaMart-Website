import { z } from "zod";

export const addressSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(7),
  city: z.string().min(2),
  address: z.string().min(5),
  postalCode: z.string().min(4),
});

export const checkoutSchema = z.object({
  address: addressSchema,
  shippingMethod: z.enum(["standard", "express"]),
  paymentMethod: z.enum(["cod", "card", "bank"]),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});
