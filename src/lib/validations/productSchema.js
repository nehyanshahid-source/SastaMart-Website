import { z } from "zod";

export const productSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  slug: z.string().min(2),
  price: z.number().nonnegative(),
  salePrice: z.number().nonnegative().optional(),
  category: z.string().min(1),
  stock: z.number().int().nonnegative(),
  description: z.string().min(10).optional(),
  images: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

export const productListSchema = z.array(productSchema);
