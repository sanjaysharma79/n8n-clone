import { Polar } from "@polar-sh/sdk";

export const polarClient = new Polar({
  accessToken: process.env.POLAR_API_KEY,
  server: "sandbox",
  //   server: process.env.NODE_ENV !== "production" ? "sandbox" : "production",
  //   server: process.env.NODE_ENV === "production" ? "https://api.polar.sh" : "http://localhost:8000",
});
