import { PrismaClient as OriginalPrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';

const mockPrisma = mockDeep<OriginalPrismaClient>();

export const PrismaClient = () => mockPrisma;
