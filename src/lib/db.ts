import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
  //   prisma: PrismaClient | undefined;
};

const prisma = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
