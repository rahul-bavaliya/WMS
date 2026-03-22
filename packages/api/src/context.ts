import { initTRPC, TRPCError } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export interface TenantContext {
  userId: string;
  companyId: string;
  branchId?: string;
  role: string;
}

export interface Context {
  tenant?: TenantContext;
}

export async function createContext(opts: FetchCreateContextFnOptions): Promise<Context> {
  // For now, return empty context - Clerk auth will be added in Week 1 Day 4
  return {};
}

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

const enforceTenant = t.middleware(async ({ ctx, next }) => {
  if (!ctx.tenant) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Tenant context required',
    });
  }
  return next({
    ctx: {
      ...ctx,
      tenant: ctx.tenant,
    },
  });
});

export const tenantProcedure = t.procedure.use(enforceTenant);
