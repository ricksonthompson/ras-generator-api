import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/configs/prisma.service";
import rasEntity from "src/entities/ras.entity";
import IRasRepository from "./ras.repository.contract";

@Injectable()
export class RasRepository implements IRasRepository {
  constructor(
    private readonly repository: PrismaService
  ) {}
  
  create(data: rasEntity): Promise<rasEntity> {
    throw new Error("Method not implemented.");
  }
}
