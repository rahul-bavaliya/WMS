import { z } from 'zod';

export const cuidRegex = /^c[a-z0-9]{24}$/;

export const createWorkOrderSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  customerId: z.string().regex(cuidRegex),
  branchId: z.string().regex(cuidRegex).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  jobType: z.string().optional(),
  tradeType: z.string().optional(),
  scheduledDate: z.string().datetime().optional(),
  estimatedHours: z.number().positive().optional(),
});

export const updateWorkOrderSchema = createWorkOrderSchema.partial().extend({
  id: z.string().regex(cuidRegex),
  status: z.enum(['OPEN', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'INVOICED', 'CANCELLED']).optional(),
});

export const assignWorkOrderSchema = z.object({
  workOrderId: z.string().regex(cuidRegex),
  technicianId: z.string().regex(cuidRegex),
});

export const workOrderFiltersSchema = z.object({
  status: z.enum(['OPEN', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'INVOICED', 'CANCELLED']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  branchId: z.string().regex(cuidRegex).optional(),
  technicianId: z.string().regex(cuidRegex).optional(),
  fromDate: z.string().datetime().optional(),
  toDate: z.string().datetime().optional(),
  search: z.string().optional(),
});
