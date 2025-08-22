import { Injectable } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { DepartmentService } from '../services/department.service';
@Injectable()
export class FindAllDepartmentsUseCase {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  async execute(): Promise<DepartmentEntity[]> {
    return this.departmentService.findAll();
  }
}
