import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesController } from './processes.controller';
import { ProcessesRepository } from './repositories/processes.repository';
import { PrismaProcessesRepository } from './repositories/implementations/prisma-processes.repository';

@Module({
    controllers: [ProcessesController],
    providers: [
        ProcessesService,
        {
            provide: ProcessesRepository,
            useClass: PrismaProcessesRepository,
        },
    ],
})
export class ProcessesModule {}
