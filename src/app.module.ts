import { Module } from '@nestjs/common';
import { AreasModule } from './modules/areas/areas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AreasModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
