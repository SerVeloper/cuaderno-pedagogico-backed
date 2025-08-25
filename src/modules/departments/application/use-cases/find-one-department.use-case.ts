import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { DepartmentService } from '../services/department.service';

@Injectable()
export class FindOneDepartmentUseCase {
  constructor(private readonly departmentService: DepartmentService) {}

  async execute(id: number): Promise<DepartmentEntity | null> {
    const department = await this.departmentService.findById(id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    return this.departmentService.findById(id);
  }
}
