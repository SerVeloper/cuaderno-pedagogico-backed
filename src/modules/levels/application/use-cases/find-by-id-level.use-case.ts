import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';

@Injectable()
export class FindByIdLevelUseCase {
  constructor(
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(id: number): Promise<LevelEntity | null> {
    const level = await this.levelRepository.findById(id);
    if (!level) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }
    return this.levelRepository.findById(id);
  }
}
