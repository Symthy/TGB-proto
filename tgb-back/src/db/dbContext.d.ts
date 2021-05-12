import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export interface DbContext extends PrismaClient {
}

export interface DbContextProvider extends OnModuleInit, OnModuleDestroy {
  getContext(): DbContext;
}
