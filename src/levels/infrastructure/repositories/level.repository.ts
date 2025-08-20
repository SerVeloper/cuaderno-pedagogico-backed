import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LevelOrmEntity } from './level.orm.entity';
import { LevelRepositoryInterface } from '../../domain/interfaces/level.repository.interface';
import { LevelEntity } from '../../domain/entities/level.entity';

@Injectable()
export class LevelRepository implements LevelRepositoryInterface {
  constructor(
    @InjectRepository(LevelOrmEntity)
    private readonly repository: Repository<LevelOrmEntity>,
  ) {}

  private toOrmEntity(domain: LevelEntity): Partial<LevelOrmEntity> {
    return {
      LevelId: domain.LevelId,
      Description: domain.Description,
      IsActive: domain.IsActive ?? true,
      CreatedAt: domain.CreatedAt,
      UpdatedAt: domain.UpdatedAt,
    };
  }

  private toDomainEntity(entity: LevelOrmEntity): LevelEntity {
    return new LevelEntity(
      entity.LevelId,
      entity.Description,
      entity.IsActive,
      entity.CreatedAt,
      entity.UpdatedAt,
    );
  }

  async create(level: LevelEntity): Promise<LevelEntity> {
    const entity = this.toOrmEntity(level);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<LevelEntity[]> {
    const entities = await this.repository.find({ where: { IsActive: true } });
    return entities.map((entity) => this.toDomainEntity(entity));
  }

  async findById(id: number): Promise<LevelEntity | null> {
    const entity = await this.repository.findOne({ where: { LevelId: id, IsActive: true } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, levelEntity: LevelEntity): Promise<LevelEntity> {
    await this.repository.update(id, this.toOrmEntity(levelEntity));
    const updateEntity = await this.repository.findOne({ where: { LevelId: id } });
    if (!updateEntity) {
      throw new NotFoundException(`Level with ID ${id} not found `);
    }
    return this.toDomainEntity(updateEntity);
  }

  async delete(id: number): Promise<void> {
    const level = await this.repository.findOne({ where: { LevelId: id, IsActive: true } });
    if (!level) throw new NotFoundException(`Level with ID ${id} not found`);
    level.IsActive = false;
    await this.repository.save(level);
  }
}
