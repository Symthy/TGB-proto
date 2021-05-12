
import { PrismaClient } from '@prisma/client';
import { mocked } from 'ts-jest/utils';

const prisma = new PrismaClient();
const mockedPrisma = mocked(prisma, true);

declare global {
  const $prisma: typeof mockedPrisma;
  namespace NodeJS {
    interface Global {
      $prisma: typeof mockedPrisma;
    }
  }
}

global.$prisma = mockedPrisma;
