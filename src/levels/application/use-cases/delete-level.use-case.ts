import { Injectable, NotFoundException } from '@nestjs/common';
import { LevelService } from '../services/level.service';

@Injectable()
export class DeleteLevelUseCase {
  constructor(
    private readonly levelService: LevelService,
  ) {}

  async execute(id: number): Promise<void> {
    const level = await this.levelService.findById(id);
    if (!level) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }
    await this.levelService.delete(id);
  }
}
