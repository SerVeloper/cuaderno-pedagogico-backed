import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';
import { DepartmentService } from '../services/department.service';

@Injectable()
export class UpdateDepartmentUseCase {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  async execute(id: number, updateData: UpdateDepartmentDto): Promise<DepartmentEntity> {
    const existingDepartment = await this.departmentService.findById(id);

    if (!existingDepartment) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    const departmentToUpdate = {...existingDepartment, ...updateData };
    return this.departmentService.update(id, departmentToUpdate);
  }
}
