import { Injectable, NotFoundException, Inject, BadRequestException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';

@Injectable()
export class UpdateDepartmentUseCase {
  constructor(
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentsRepositoryInterface: DepartmentsRepositoryInterface,
  ) {}

  async execute(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<DepartmentEntity> {
    const existingDepartment = await this.departmentsRepositoryInterface.findById(id);
    if (!existingDepartment) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    const department = {
      Name: updateDepartmentDto.Name ?? existingDepartment.Name,
      Description: updateDepartmentDto.Description ?? existingDepartment.Description,
      IsActive: updateDepartmentDto.IsActive ?? existingDepartment.IsActive,
    };
    try {
      return await this.departmentsRepositoryInterface.update(id, department);
    } catch (error) {
      throw new BadRequestException(`Failed to update department: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
