import { Injectable, Inject } from '@nestjs/common';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
import { DepartmentEntity } from '../../domain/entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentRepositoryInterface: DepartmentsRepositoryInterface,
  ) {}

  async create(departmentEntity: DepartmentEntity): Promise<DepartmentEntity> {
    return this.departmentRepositoryInterface.create(departmentEntity);
  }

  async findAll(): Promise<DepartmentEntity[]> {
    return this.departmentRepositoryInterface.findAll();
  }

  async findById(id: number): Promise<DepartmentEntity | null> {
    return this.departmentRepositoryInterface.findById(id);
  }

  async update(id: number, departmentEntity: DepartmentEntity): Promise<DepartmentEntity> {
    return this.departmentRepositoryInterface.update(id, departmentEntity);
  }

  async delete(id: number): Promise<void> {
    return this.departmentRepositoryInterface.delete(id);
  }
}
