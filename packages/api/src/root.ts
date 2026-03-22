import { router } from './context';
import { companiesRouter, branchesRouter, workOrdersRouter } from './routers';

export const appRouter = router({
  companies: companiesRouter,
  branches: branchesRouter,
  workOrders: workOrdersRouter,
});

export type AppRouter = typeof appRouter;

export { router } from './context';
export { publicProcedure, tenantProcedure } from './context';
