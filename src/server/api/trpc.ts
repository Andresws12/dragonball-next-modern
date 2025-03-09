/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context.
 * 2. You want to create a new middleware or type of procedure.
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in.
 */
import { initTRPC } from "@trpc/server";
import type { NextRequest } from "next/server";
import superjson from "superjson";
import { ZodError } from "zod";

interface CreateContextOptions {
  headers: Headers;
  req: NextRequest;
}

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 */
export const createTRPCContext = async (opts: CreateContextOptions) => {
  return {
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 */
export const createTRPCRouter = t.router;

/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 */
const timingMiddleware = t.middleware(async ({ next }) => {
  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();
  return result;
});

/**
 * Public (unauthenticated) procedure.
 */
export const publicProcedure = t.procedure.use(timingMiddleware);
