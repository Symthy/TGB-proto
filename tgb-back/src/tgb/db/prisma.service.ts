import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DbContext, DbContextProvider } from './dbContext';


@Injectable()
export class PrismaService implements DbContextProvider {
  private prisma: DbContext;
  constructor() {
    this.prisma = new PrismaClient();
  }

  getContext(): DbContext {
    return this.prisma;
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
