import { Inject, Injectable } from "@nestjs/common";
import { Document, HeadingLevel, Packer, Paragraph } from "docx";
import { writeFileSync } from "fs";
import { CreateRasDTO } from "src/dtos/ras/createRas.dto";
import Employee from "src/entities/employee.entity";
import Project from "src/entities/project.entity";
import Ras from "src/entities/ras.entity";
import IRasRepository from "src/repositories/ras/ras.repository.contract";
import { buffer } from "stream/consumers";

@Injectable()
export class RasService {
  constructor(
    @Inject("IRasRepository")
    private readonly repository: IRasRepository
  ) {}

  async create(props: CreateRasDTO): Promise<Ras> {
    const project = new Project({
      title: "rnnr"
    })

    const employee = new Employee({ 
      email: "dfd",
      name: "dffd",
      occupation: "df"
    })
    
    return this.repository.create(new Ras({
      period: "01/02 a 05/03",
      technicalCoordinator: "Jonathan Barros",
      title: "Ras de Maio"
    }, project, employee))
  }

  async generateDocx() {
    const docx = new Document({
      title: "Testing",
      sections: [
        {
          children: [
            new Paragraph({
              text: "Testing",
              heading: HeadingLevel.HEADING_1
            })
          ]
        }
      ]
    })

    return await Packer.toBuffer(docx).then((buffer) => {
      writeFileSync("ras.docx", buffer)
    })
  }
}