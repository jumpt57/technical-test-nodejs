import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Mission } from './models/Mission';


export interface IMissionRepository {
    create(mission: Mission): Mission;
    list(startDate: Date, endDate: Date): Mission[];
}


@Injectable()
export class InMissionRepository implements IMissionRepository {

    private missions : Mission[] = [];

    create(mission: Mission): Mission {


        const newMission =  {
            id: randomUUID().toString(),
            ...mission,
        }

        this.missions.push(newMission);

        return newMission;
    }

    list(startDate: Date, endDate: Date): Mission[] {
        return this.missions.filter(mission => endDate.getTime() >= mission.missionStart.getTime() && startDate.getTime() <= mission.missionStart.getTime());
    }

}

@Injectable()
export class MissionRepository implements IMissionRepository {
    create(mission: Mission): Mission {
        throw new Error('Method not implemented.');
    }
    list(startDate: Date, endDate: Date): Mission[] {
        throw new Error('Method not implemented.');
    }

}
