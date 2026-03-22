import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  phone: z.string().optional(),
  role: z.enum(['SUPER_ADMIN', 'COMPANY_ADMIN', 'BRANCH_MANAGER', 'DISPATCHER', 'TECHNICIAN', 'CUSTOMER']),
  branchId: z.string().optional(),
});

export const updateUserSchema = createUserSchema.partial().extend({
  id: z.string(),
  isActive: z.boolean().optional(),
});

export const inviteUserSchema = z.object({
  email: z.string().email(),
  role: z.enum(['COMPANY_ADMIN', 'BRANCH_MANAGER', 'DISPATCHER', 'TECHNICIAN', 'CUSTOMER']),
  branchId: z.string().optional(),
});
