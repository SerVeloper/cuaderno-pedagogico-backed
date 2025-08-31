import { Injectable, Inject } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { CreateDepartmentDto } from '../dtos/create-department.dto';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';
import { CreateDepartmentUseCase } from '../use-cases/create-department.use-case';
import { FindAllDepartmentsUseCase } from '../use-cases/find-all-departments.use-case';
import { FindByIdDepartmentUseCase } from '../use-cases/find-by-id-department.use-case';
import { UpdateDepartmentUseCase } from '../use-cases/update-department.use-case';
import { DeleteDepartmentUseCase } from '../use-cases/delete-department.use-case';
@Injectable()
export class DepartmentService {
  constructor(
    @Inject('CreateDepartmentUseCase')
    private readonly createDepartmentUseCase: CreateDepartmentUseCase,
    @Inject('FindAllDepartmentsUseCase')
    private readonly findAllDepartmentsUseCase: FindAllDepartmentsUseCase,
    @Inject('FindByIdDepartmentUseCase')
    private readonly findByIdDepartmentUseCase: FindByIdDepartmentUseCase,
    @Inject('UpdateDepartmentUseCase')
    private readonly updateDepartmentUseCase: UpdateDepartmentUseCase,
    @Inject('DeleteDepartmentUseCase')
    private readonly deleteDepartmentUseCase: DeleteDepartmentUseCase,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<DepartmentEntity> {
    return this.createDepartmentUseCase.execute(createDepartmentDto);
  }

  async findAll(): Promise<DepartmentEntity[]> {
    return this.findAllDepartmentsUseCase.execute();
  }

  async findById(id: number): Promise<DepartmentEntity | null> {
    return this.findByIdDepartmentUseCase.execute(id);
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<DepartmentEntity> {
    return this.updateDepartmentUseCase.execute(id, updateDepartmentDto);
  }

  async delete(id: number): Promise<void> {
    return this.deleteDepartmentUseCase.execute(id);
  }
}
