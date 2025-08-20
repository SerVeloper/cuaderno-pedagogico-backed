import { Injectable } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { LevelService } from '../services/level.service';

@Injectable()
export class FindAllLevelsUseCase {
  constructor(
    private readonly levelService: LevelService,
  ) {}

  async execute(): Promise<LevelEntity[]> {
    return this.levelService.findAll();
  }
}
