import { Injectable, NotFoundException } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { LevelService } from '../services/level.service';

@Injectable()
export class FindByIdLevelUseCase {
  constructor(private readonly levelService: LevelService) {}

  async execute(id: number): Promise<LevelEntity | null> {
    const level = await this.levelService.findById(id);
    if (!level) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }
    return this.levelService.findById(id);
  }
}
