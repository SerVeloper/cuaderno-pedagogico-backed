import { Injectable, Inject } from '@nestjs/common';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';
import { LevelEntity } from '../../domain/entities/level.entity';

@Injectable()
export class LevelService {
  constructor(
    @Inject('LevelRepositoryInterface')
    private readonly levelRepositoryInterface: LevelRepositoryInterface,
  ) {}

  async create(levelEntity: LevelEntity): Promise<LevelEntity> {
    return this.levelRepositoryInterface.create(levelEntity);
  }

  async findAll(): Promise<LevelEntity[]> {
    return this.levelRepositoryInterface.findAll();
  }

  async findById(id: number): Promise<LevelEntity | null> {
    return this.levelRepositoryInterface.findById(id);
  }

  async update(id: number, levelEntity: LevelEntity): Promise<LevelEntity> {
    return this.levelRepositoryInterface.update(id, levelEntity);
  }

  async delete(id: number): Promise<void> {
    return this.levelRepositoryInterface.delete(id);
  }
}
