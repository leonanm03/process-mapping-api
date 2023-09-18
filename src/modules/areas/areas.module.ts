import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { AreasRepository } from './repositories/areas.repository';
import { PrismaAreasRepository } from './repositories/implementations/prisma-areas.repository';

@Module({
    controllers: [AreasController],
    providers: [
        AreasService,
        {
            provide: AreasRepository,
            useClass: PrismaAreasRepository,
        },
    ],
})
export class AreasModule {}
