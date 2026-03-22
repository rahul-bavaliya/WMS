import { z } from 'zod';
import { router, tenantProcedure } from '../context';
import { createBranchSchema, updateBranchSchema } from '@wms/validators';

export const branchesRouter = router({
  getAll: tenantProcedure.query(async ({ ctx }) => {
    console.log('Fetching branches for company:', ctx.tenant?.companyId);
    return [];
  }),

  getById: tenantProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      console.log('Fetching branch:', input.id);
      return null;
    }),

  create: tenantProcedure
    .input(createBranchSchema)
    .mutation(async ({ input }) => {
      console.log('Creating branch:', input);
      return { success: true, data: input };
    }),

  update: tenantProcedure
    .input(updateBranchSchema)
    .mutation(async ({ input }) => {
      console.log('Updating branch:', input);
      return { success: true, data: input };
    }),
});
