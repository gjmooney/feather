import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  authCallback: publicProcedure.query(() => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user || !user.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return { success: true };
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
