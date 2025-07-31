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

  private toOrmEntity(domain: DepartmentEntity): Partial<DepartmentOrmEntity> {
    return {
      DepartmentID: domain.departmentID,
      Name: domain.name,
      Description: domain.description,
      IsActive: domain.isActive ?? true,
      CreatedAt: domain.createdAt,
      UpdatedAt: domain.updatedAt,
    };
  }

  private toDomainEntity(entity: DepartmentOrmEntity): DepartmentEntity {
    return new DepartmentEntity(
      entity.DepartmentID,
      entity.Name,
      entity.Description,
      entity.IsActive,
      entity.CreatedAt,
      entity.UpdatedAt,
    );
  }

  async create(department: DepartmentEntity): Promise<DepartmentEntity> {
    const entity = this.toOrmEntity(department);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<DepartmentEntity[]> {
    const entities = await this.repository.find({ where: { IsActive: true } });
    return entities.map((entity) => this.toDomainEntity(entity));
  }

  async findById(id: number): Promise<DepartmentEntity | null> {
    const entity = await this.repository.findOne({ where: { DepartmentID: id, IsActive: true } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, departmentEntity: DepartmentEntity): Promise<DepartmentEntity> {
    await this.repository.update(id, this.toOrmEntity(departmentEntity));
    const updateEntity = await this.repository.findOne({ where: { DepartmentID: id } });
    if (!updateEntity) {
      throw new NotFoundException(`Department with ID ${id} not found `);
    }
    return this.toDomainEntity(updateEntity);
  }

  async delete(id: number): Promise<void> {
    const department = await this.repository.findOne({ where: { DepartmentID: id, IsActive: true } });
    if (!department) throw new NotFoundException(`Department with ID ${id} not found`);
    department.IsActive = false;
    await this.repository.save(department);
  }
}
