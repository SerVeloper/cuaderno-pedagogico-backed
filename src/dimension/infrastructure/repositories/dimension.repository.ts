import { Injectable, NotFoundException } from '@nestjs/common';
import { DimensionRepositoryInterface } from '../../domain/interfaces/dimension.interface';
import { Dimension } from '../../domain/entities/dimension.entity';
import { DimensionOrmEntity } from './dimension.orm.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DimensionRepository implements DimensionRepositoryInterface {
  constructor(
    @InjectRepository(DimensionOrmEntity)
    private readonly repository: Repository<DimensionOrmEntity>,
  ) {}

  private toOrmEntity(domain: Dimension): DimensionOrmEntity {
    const ormEntity = new DimensionOrmEntity();
    ormEntity.DimensionID = domain.DimensionID;
    ormEntity.Name = domain.Name;
    ormEntity.Description = domain.Description;
    ormEntity.SubjectID = domain.SubjectID;
    ormEntity.CourseID = domain.CourseID;
    ormEntity.IsActive = domain.IsActive;
    ormEntity.CreatedAt = domain.CreatedAt;
    ormEntity.UpdatedAt = domain.UpdatedAt;

    return ormEntity;
  
  }

  private toDomainEntity(entity: DimensionOrmEntity): Dimension {
    return new Dimension(
      entity.DimensionID,
      entity.Name,
      entity.Description,
      entity.SubjectID,
      entity.CourseID,
      entity.IsActive,
      entity.CreatedAt,
      entity.UpdatedAt
    );
  }

  async create(dimension: Dimension): Promise<Dimension> {
    const entity = this.toOrmEntity(dimension);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<Dimension[]> {
    const entities = await this.repository.find();
    return entities.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<Dimension | null> {
    const entity = await this.repository.findOne({ where: { DimensionID: id } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, dimension: Dimension): Promise<Dimension> {
    await this.repository.update(id, this.toOrmEntity(dimension));
    const updatedEntity = await this.repository.findOne({ where: { DimensionID: id } });
    if (!updatedEntity) {
      throw new NotFoundException(`Dimension with ID ${id} not found`);
    }
    return this.toDomainEntity(updatedEntity);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Dimension with ID ${id} not found`);
    }
  }
}