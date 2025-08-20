import { Injectable } from '@nestjs/common';
import { LevelService } from '../services/level.service';
import { CreateLevelDto } from '../dtos/create-level.dto';
import { LevelEntity } from '../../domain/entities/level.entity';

@Injectable()
export class CreateLevelUseCase {
  constructor(
    private readonly levelService: LevelService,
  ) {}

  async execute(createLevelDto: CreateLevelDto): Promise<LevelEntity> {
    const newLevel = new LevelEntity(
      0,
      createLevelDto.Description,
      createLevelDto.IsActive ?? true,
      new Date(),
      new Date(),
    );

    return await this.levelService.create(newLevel);
  }
}
