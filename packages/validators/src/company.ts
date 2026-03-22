import { z } from 'zod';

export const createCompanySchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().optional(),
  logo: z.string().url().optional(),
  industry: z.enum(['HVAC', 'AUTO_GARAGE', 'MANUFACTURING', 'SCRAP_YARD', 'MAINTENANCE_SHOP']),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const updateCompanySchema = createCompanySchema.partial().extend({
  id: z.string(),
  isActive: z.boolean().optional(),
});
