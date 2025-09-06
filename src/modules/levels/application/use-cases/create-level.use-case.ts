import { Injectable, Inject } from '@nestjs/common';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';
import { CreateLevelDto } from '../dtos/create-level.dto';
import { LevelEntity } from '../../domain/entities/level.entity';

@Injectable()
export class CreateLevelUseCase {
  constructor(
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(createLevelDto: CreateLevelDto): Promise<LevelEntity> {
    const newLevel = new LevelEntity(
      0,
      createLevelDto.Description,
      createLevelDto.IsActive ?? true,
      new Date(),
      new Date(),
      null
    );

    return await this.levelRepository.create(newLevel);
  }
}
