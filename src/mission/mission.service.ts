import { Injectable } from '@nestjs/common';
import { Mission } from './models/Mission';
import { MissionDto } from './controllers/MissionDto';
import { MissionRepository } from './repository';

export class MissionOverlapError extends Error {};

@Injectable()
export class MissionService {

    constructor(private readonly missionRepository: MissionRepository) {}

    create(missionDto: MissionDto): Mission {

        const mission: Mission = {
            jobType: missionDto.jobType,
            missionStart: missionDto.missionStart,
            missionEnd: new Date(new Date(missionDto.missionStart).getTime() + missionDto.howLongInMinutes * 60000)
        }

        const missions = this.missionRepository.list(mission.missionEnd, mission.missionEnd);

        if (missions.length != 0) {
            throw new MissionOverlapError("There is already a mission at the same time !");
        }
    
        return this.missionRepository.create(mission);
    }


}
