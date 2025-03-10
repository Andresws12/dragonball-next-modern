import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";

/**
 * This helper wraps `createTRPCContext` and provides the required context
 * for the tRPC API when handling an HTTP request.
 */
const createContext = async (opts: { req: Request | NextRequest; headers?: Headers; env?: unknown }) => {
  return createTRPCContext({
    ...opts,
    req: opts.req as NextRequest,
    headers: opts.headers || new Headers(),
  });
};

// Handler for Next.js
const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: ({ resHeaders }) =>
      createContext({ req, headers: resHeaders }),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }: { path: string | undefined; error: Error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
