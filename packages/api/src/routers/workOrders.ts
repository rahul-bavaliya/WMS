import { z } from 'zod';
import { router, tenantProcedure, publicProcedure } from '../context';
import { createWorkOrderSchema, updateWorkOrderSchema, assignWorkOrderSchema, workOrderFiltersSchema } from '@wms/validators';

export const workOrdersRouter = router({
  health: publicProcedure.query(() => {
    return { status: 'ok' };
  }),

  getAll: tenantProcedure
    .input(workOrderFiltersSchema.optional())
    .query(async ({ ctx, input }) => {
      console.log('Fetching work orders for company:', ctx.tenant?.companyId, input);
      return [];
    }),

  getById: tenantProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      console.log('Fetching work order:', input.id);
      return null;
    }),

  create: tenantProcedure
    .input(createWorkOrderSchema)
    .mutation(async ({ input }) => {
      console.log('Creating work order:', input);
      return { success: true, data: input };
    }),

  update: tenantProcedure
    .input(updateWorkOrderSchema)
    .mutation(async ({ input }) => {
      console.log('Updating work order:', input);
      return { success: true, data: input };
    }),

  assign: tenantProcedure
    .input(assignWorkOrderSchema)
    .mutation(async ({ input }) => {
      console.log('Assigning work order:', input);
      return { success: true };
    }),
});
