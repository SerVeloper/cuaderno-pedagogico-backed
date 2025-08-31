import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentOrmEntity } from './department.orm.entity';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
import { DepartmentEntity } from '../../domain/entities/department.entity';

@Injectable()
export class DepartmentRepository implements DepartmentsRepositoryInterface {
  constructor(
    @InjectRepository(DepartmentOrmEntity)
    private readonly repository: Repository<DepartmentOrmEntity>,
  ) {}

  private toOrmEntity(domain: Partial<DepartmentEntity>): Partial<DepartmentOrmEntity> {
    return {
      DepartmentId: domain.DepartmentId,
      Name: domain.Name,
      Description: domain.Description,
      IsActive: domain.IsActive ?? true,
      CreatedAt: domain.CreatedAt,
      UpdatedAt: domain.UpdatedAt,
      DeletedAt: domain.DeletedAt
    };
  }

  private toDomainEntity(entity: DepartmentOrmEntity): DepartmentEntity {
    return new DepartmentEntity(
      entity.DepartmentId,
      entity.Name,
      entity.Description || '',
      entity.IsActive ?? true,
      entity.CreatedAt,
      entity.UpdatedAt,
      entity.DeletedAt
    );
  }

  async create(department: Omit<DepartmentEntity, 'DepartmentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>): Promise<DepartmentEntity> {
    const entity = this.repository.create(department);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<DepartmentEntity[]> {
    const entities = await this.repository.find({ where: { IsActive: true } });
    return entities.map((entity) => this.toDomainEntity(entity));
  }

  async findById(id: number): Promise<DepartmentEntity | null> {
    const entity = await this.repository.findOne({ where: { DepartmentId: id, IsActive: true } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, department: Partial<Omit<DepartmentEntity, 'DepartmentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<DepartmentEntity> {
    const entity = await this.repository.findOne({ where: { DepartmentId: id, IsActive: true } });
    if (!entity) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    const updateData: Partial<DepartmentOrmEntity> = { ...this.toOrmEntity(department), UpdatedAt: new Date() };
    await this.repository.update(id, updateData);
    const updatedEntity = await this.findById(id);
    if (!updatedEntity) {
      throw new NotFoundException(`Department with ID ${id} not found after update`);
    }
    return updatedEntity;
  }

  async delete(id: number, data: Partial<Omit<DepartmentEntity, 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<void> {
    const entity = await this.repository.findOne({ where: { DepartmentId: id, IsActive: true } });
    if (!entity) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    await this.repository.update(id, { ...data, UpdatedAt: new Date(), DeletedAt: new Date() });
  }
}
