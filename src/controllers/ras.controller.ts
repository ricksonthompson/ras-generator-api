import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateRasDTO } from "src/dtos/ras/createRas.dto";
import Ras from "src/entities/ras.entity";
import { RasService } from "src/services/ras.service";

@Controller('/api/ras')
export class RasController {
  constructor(
    private readonly rasService: RasService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CreateRasDTO): Promise<Ras> {
    return this.rasService.create(payload)
  }

  @Get("/docx")
  @HttpCode(HttpStatus.OK)
  async getRasDocx() {
    return await this.rasService.generateDocx();
  }
}
