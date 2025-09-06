import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';

@Injectable()
export class DeleteLevelUseCase {
  constructor(
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(id: number): Promise<void> {
    const level = await this.levelRepository.findById(id);
    if (!level) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }
    await this.levelRepository.delete(id);
  }
}
