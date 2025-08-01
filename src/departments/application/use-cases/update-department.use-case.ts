import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';
import { DepartmentService } from '../services/department.service';

@Injectable()
export class UpdateDepartmentUseCase {
  constructor(private readonly departmentService: DepartmentService) {}

  async execute(id: number, updateData: UpdateDepartmentDto): Promise<DepartmentEntity> {
    const departmentResult = await this.departmentService.findById(id);
    if (!departmentResult) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    const updatedDepartment = { ...departmentResult, ...updateData };
    return this.departmentService.update(id, updatedDepartment);
}
}
