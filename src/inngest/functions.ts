import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

// const google = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY, }); // default key name -> GOOGLE_GENERATIVE_AI_API_KEY

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s");

    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.0-flash-lite"),
        system: "You are a helpful assistant",
        prompt: "what is 2+5?",
      }
    );

    const { steps: openaiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        model: openai("gpt-3.5-turbo"),
        system: "You are a helpful assistant",
        prompt: "what is 2+5?",
      }
    );

    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        model: anthropic("claude-3-7-sonnet-latest"),
        system: "You are a helpful assistant",
        prompt: "what is 2+5?",
      }
    );

    return {
      geminiSteps,
      openaiSteps,
      anthropicSteps,
    };
  }
);
