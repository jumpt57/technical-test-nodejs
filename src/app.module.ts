import { Module } from '@nestjs/common';

import { MissionService } from './mission/mission.service';
import { MissionController } from './mission/controllers/mission.controller';
import { MissionRepository } from './mission/repository';
import { ErrorsInterceptor } from './mission/interceptor';

@Module({
  imports: [],
  controllers: [MissionController],
  providers: [MissionService, MissionRepository],
})
export class AppModule {}
