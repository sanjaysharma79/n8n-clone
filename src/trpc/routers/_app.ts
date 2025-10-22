import { createTRPCRouter, protectedProcedure } from "../init";
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

    return {
      success: true,
      message: "Job Queued",
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
