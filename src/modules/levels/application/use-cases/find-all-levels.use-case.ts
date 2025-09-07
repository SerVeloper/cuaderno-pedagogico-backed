import { Injectable, Inject } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';
@Injectable()
export class FindAllLevelsUseCase {
  constructor(
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(): Promise<LevelEntity[]> {
    return this.levelRepository.findAll();
  }
}
