import { Module } from '@nestjs/common';
import { AreasModule } from './modules/areas/areas.module';

@Module({
  imports: [AreasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
