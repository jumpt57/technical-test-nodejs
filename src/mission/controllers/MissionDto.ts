import { ApiProperty } from "@nestjs/swagger";
import { JobType } from "../models/JobType";


export class MissionDto {

    @ApiProperty()
    missionStart: Date;

    @ApiProperty()
    howLongInMinutes: number;

    @ApiProperty({
        enum: JobType
    })
    jobType: JobType

}