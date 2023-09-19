import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesController } from './processes.controller';
import { ProcessesRepository } from './repositories/processes.repository';
import { PrismaProcessesRepository } from './repositories/implementations/prisma-processes.repository';
import { AreasRepository } from '../areas/repositories/areas.repository';
import { PrismaAreasRepository } from '../areas/repositories/implementations/prisma-areas.repository';

@Module({
    controllers: [ProcessesController],
    providers: [
        ProcessesService,
        {
            provide: ProcessesRepository,
            useClass: PrismaProcessesRepository,
        },
        {
            provide: AreasRepository,
            useClass: PrismaAreasRepository,
        },
    ],
})
export class ProcessesModule {}
