import { Module } from '@nestjs/common';
import { AreasModule } from './modules/areas/areas.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProcessesModule } from './modules/processes/processes.module';

@Module({
  imports: [AreasModule, PrismaModule, ProcessesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
