import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //Fetching the video
    await step.sleep("Fetching Video", "5s");

    //Transcribing
    await step.sleep("Transcribing Video", "5s");

    //Sending Transcription to AI
    await step.sleep("Sending Video to AI", "5s");

    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "Workflow-from-Inngest",
        },
      });
    });
  }
);
