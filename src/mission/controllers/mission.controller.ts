import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MissionService } from '../mission.service';
import { Mission } from '../models/Mission';
import { MissionDto } from './MissionDto';

@Controller("mission")
@ApiTags('mission')
export class MissionController {

  constructor(private readonly missionService: MissionService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  create(@Body() missionDto: MissionDto): Mission {

    return this.missionService.create(missionDto)

  }
}


