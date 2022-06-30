import { Module } from '@nestjs/common';
import { DescriptiveReportModule } from './descriptiveReport.module';
import { EmployeeModule } from './employee.module';
import { EvidenceModule } from './evidence.module';
import { ProjectModule } from './project.module';
import { RasModule } from './ras.module';
import { RepositoryModule } from './repository.module';

@Module({
  imports: [
    RepositoryModule,
    DescriptiveReportModule,
    EmployeeModule,
    EvidenceModule,
    ProjectModule,
    RasModule
  ]
})

export class AppModule {}
