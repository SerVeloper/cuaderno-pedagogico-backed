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
      province_id: domain.province_id,
      name: domain.name,
      description: domain.description,
      is_active: domain.is_active ?? true,
      department_id: domain.department_id,
      created_at: domain.created_at,
      updated_at: domain.updated_at,
    };
  }

  private toDomainEntity(entity: ProvinceOrmEntity): ProvinceEntity {
    return new ProvinceEntity(entity.province_id, entity.name, entity.description || '', entity.is_active, entity.department_id, entity.created_at, entity.updated_at);
  }

  async create(province: Omit<ProvinceEntity, 'province_id' | 'created_at' | 'updated_at'>): Promise<ProvinceEntity> {
    const department = await this.departmentRepo.findOne({ where: { DepartmentID: province.department_id, IsActive: true } });
    if (!department) {
      throw new BadRequestException(`Department with ID ${province.department_id} does not exist or is inactive`);
    }
    const entity = this.provinceRepo.create({ ...this.toOrmEntity(province), department });
    const savedEntity = await this.provinceRepo.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<ProvinceEntity[]> {
    const entities = await this.provinceRepo.find({ where: { is_active: true } });
    return entities.map((entity) => this.toDomainEntity(entity));
  }

  async findById(id: number): Promise<ProvinceEntity | null> {
    const entity = await this.provinceRepo.findOne({ where: { province_id: id, is_active: true } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, province: Partial<Omit<ProvinceEntity, 'province_id' | 'created_at' | 'updated_at'>>): Promise<ProvinceEntity> {
    const updateData: Partial<ProvinceOrmEntity> = { ...this.toOrmEntity(province), updated_at: new Date() };
    if (province.department_id) {
      const department = await this.departmentRepo.findOne({ where: { DepartmentID: province.department_id, IsActive: true } });
      if (!department) {
        throw new BadRequestException(`Department with ID ${province.department_id} does not exist or is inactive`);
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

  async delete(id: number, data: Partial<Omit<ProvinceEntity, 'province_id' | 'name' | 'description' | 'department_id' | 'created_at' | 'updated_at'>>): Promise<void> {
    const entity = await this.provinceRepo.findOne({ where: { province_id: id, is_active: true } });
    if (!entity) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    await this.provinceRepo.update(id, { ...data, updated_at: new Date() });
  }
}
