import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { UpdateLevelDto } from '../dtos/update-level.dto';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';

@Injectable()
export class UpdateLevelUseCase {
  constructor(
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(id: number, updateData: UpdateLevelDto): Promise<LevelEntity> {
    const levelResult = await this.levelRepository.findById(id);
    if (!levelResult) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }
    const updatedLevel = { ...levelResult, ...updateData };
    return this.levelRepository.update(id, updatedLevel);
  }
}
