import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProvinceOrmEntity } from './province.orm.entity';
import { DepartmentOrmEntity } from '../../../departments/infraestructure/repositories/department.orm.entity';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';

@Injectable()
export class ProvinceRepository implements ProvincesRepositoryInterface {
  constructor(
    @InjectRepository(ProvinceOrmEntity)
    private readonly provinceRepo: Repository<ProvinceOrmEntity>,
    @InjectRepository(DepartmentOrmEntity)
    private readonly departmentRepo: Repository<DepartmentOrmEntity>,
  ) {}

  private toOrmEntity(domain: Partial<ProvinceEntity>): Partial<ProvinceOrmEntity> {
    return {
      ProvinceId: domain.ProvinceId,
      Name: domain.Name,
      Description: domain.Description,
      IsActive: domain.IsActive ?? true,
      DepartmentId: domain.DepartmentId,
      CreatedAt: domain.CreatedAt,
      UpdatedAt: domain.UpdatedAt,
    };
  }

  private toDomainEntity(entity: ProvinceOrmEntity): ProvinceEntity {
    return new ProvinceEntity(entity.ProvinceId, entity.Name, entity.Description || '', entity.IsActive, entity.DepartmentId, entity.CreatedAt, entity.UpdatedAt);
  }

  async create(province: Omit<ProvinceEntity, 'ProvinceId' | 'CreatedAt' | 'UpdatedAt'>): Promise<ProvinceEntity> {
    const department = await this.departmentRepo.findOne({ where: { DepartmentId: province.DepartmentId, IsActive: true } });
    if (!department) {
      throw new BadRequestException(`Department with ID ${province.DepartmentId} does not exist or is inactive`);
    }
    const entity = this.provinceRepo.create({ ...this.toOrmEntity(province), department });
    const savedEntity = await this.provinceRepo.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<ProvinceEntity[]> {
    const entities = await this.provinceRepo.find({ where: { IsActive: true } });
    return entities.map((entity) => this.toDomainEntity(entity));
  }

  async findById(id: number): Promise<ProvinceEntity | null> {
    const entity = await this.provinceRepo.findOne({ where: { ProvinceId: id, IsActive: true } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, province: Partial<Omit<ProvinceEntity, 'ProvinceId' | 'CreatedAt' | 'UpdatedAt'>>): Promise<ProvinceEntity> {
    const updateData: Partial<ProvinceOrmEntity> = { ...this.toOrmEntity(province), UpdatedAt: new Date() };
    if (province.DepartmentId) {
      const department = await this.departmentRepo.findOne({ where: { DepartmentId: province.DepartmentId, IsActive: true } });
      if (!department) {
        throw new BadRequestException(`Department with ID ${province.DepartmentId} does not exist or is inactive`);
      }
      updateData.department = department;
    }
    await this.provinceRepo.update(id, updateData);
    const updatedEntity = await this.findById(id);
    if (!updatedEntity) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    return updatedEntity;
  }

  async delete(id: number, data: Partial<Omit<ProvinceEntity, 'ProvinceId' | 'Name' | 'Description' | 'DepartmentId' | 'CreatedAt' | 'UpdatedAt'>>): Promise<void> {
    const entity = await this.provinceRepo.findOne({ where: { ProvinceId: id, IsActive: true } });
    if (!entity) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    await this.provinceRepo.update(id, { ...data, UpdatedAt: new Date() });
  }
}
