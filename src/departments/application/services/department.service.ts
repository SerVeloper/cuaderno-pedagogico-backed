import { Injectable, Inject } from '@nestjs/common';
import { DepartmentRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
import { CreateDepartmentDto } from '../dtos/department.dto';
import { Department } from '../../domain/entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DepartmentRepositoryInterface')
    private readonly departmentRepository: DepartmentRepositoryInterface,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return this.departmentRepository.create(createDepartmentDto);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.findAll();
  }

  async findOne(id: number): Promise<Department | null> {
    return this.departmentRepository.findOne(id);
  }

  async update(
    id: number,
    updateDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return this.departmentRepository.update(id, updateDepartmentDto);
  }

  async delete(id: number): Promise<void> {
    return this.departmentRepository.delete(id);
  }
}
