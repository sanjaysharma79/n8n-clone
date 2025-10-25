import {
  createTRPCRouter,
  premiumProcedure,
  protectedProcedure,
} from "../init";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.account.findMany({
      where: {
        userId: ctx.auth.user.id,
      },
    });
  }),

  testAI: premiumProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });

    return { success: true, message: "AI Job Queued" };
  }),

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async () => {
    // Send your event payload to Inngest
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "testUser@example.com",
      },
    });

    return { success: true, message: "Workflow Creation Job Queued" };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
