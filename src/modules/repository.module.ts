import { Module } from "@nestjs/common";
import { PrismaService } from "src/configs/prisma.service";

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})

export class RepositoryModule {}
