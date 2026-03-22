import { z } from 'zod';

export const createBranchSchema = z.object({
  name: z.string().min(1).max(100),
  code: z.string().min(1).max(10).regex(/^[A-Z]{2,6}-\d{1,3}$/, 'Format: CITY-01'),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  laborRateRegular: z.number().positive().default(0),
  laborRateOvertime: z.number().positive().default(0),
  laborRateEmergency: z.number().positive().default(0),
});

export const updateBranchSchema = createBranchSchema.partial().extend({
  id: z.string(),
  isActive: z.boolean().optional(),
});
