import { z } from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().optional(),
  phone: z.string().min(1),
  companyName: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  notes: z.string().optional(),
});

export const updateCustomerSchema = createCustomerSchema.partial().extend({
  id: z.string(),
  isActive: z.boolean().optional(),
});
