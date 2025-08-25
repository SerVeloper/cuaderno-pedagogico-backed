import { Injectable, NotFoundException } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { UpdateLevelDto } from '../dtos/update-level.dto';
import { LevelService } from '../services/level.service';

@Injectable()
export class UpdateLevelUseCase {
  constructor(private readonly levelService: LevelService) {}

  async execute(id: number, updateData: UpdateLevelDto): Promise<LevelEntity> {
    const levelResult = await this.levelService.findById(id);
    if (!levelResult) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }
    const updatedLevel = { ...levelResult, ...updateData };
    return this.levelService.update(id, updatedLevel);
  }
}
