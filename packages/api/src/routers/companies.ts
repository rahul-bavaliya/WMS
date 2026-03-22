import { z } from 'zod';
import { router, publicProcedure, tenantProcedure } from '../context';
import { createCompanySchema, updateCompanySchema } from '@wms/validators';

export const companiesRouter = router({
  health: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),

  getCurrent: tenantProcedure.query(async ({ ctx }) => {
    // Will fetch company from DB once Prisma is set up
    return { id: ctx.tenant?.companyId };
  }),

  create: tenantProcedure
    .input(createCompanySchema)
    .mutation(async ({ input }) => {
      // Will create company once Prisma is connected
      console.log('Creating company:', input);
      return { success: true, data: input };
    }),

  update: tenantProcedure
    .input(updateCompanySchema)
    .mutation(async ({ input }) => {
      console.log('Updating company:', input);
      return { success: true, data: input };
    }),
});
