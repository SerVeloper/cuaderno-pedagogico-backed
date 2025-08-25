import { LevelEntity } from '../entities/level.entity';

export interface LevelRepositoryInterface {
  create(level: Omit<LevelEntity, 'LevelId' | 'CreatedAt' | 'UpdatedAt'>): Promise<LevelEntity>;
  findAll(): Promise<LevelEntity[]>;
  findById(id: number): Promise<LevelEntity | null>;
  update(id: number, level: LevelEntity): Promise<LevelEntity>;
  delete(id: number): Promise<void>;
}
