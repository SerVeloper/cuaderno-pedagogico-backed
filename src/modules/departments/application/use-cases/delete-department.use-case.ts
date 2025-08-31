import { Injectable, NotFoundException, Inject, BadRequestException } from '@nestjs/common';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
@Injectable()
export class DeleteDepartmentUseCase {
  constructor(
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentRepositoryInterface: DepartmentsRepositoryInterface,
  ) {}

  async execute(id: number): Promise<void> {
    const department = await this.departmentRepositoryInterface.findById(id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    if (!department.IsActive) {
      throw new BadRequestException(`Department with ID ${id} is already inactive`);
    }
    try {
      await this.departmentRepositoryInterface.delete(id, { IsActive: false });
    } catch (error) {
      throw new BadRequestException(`Failed to delete department with ID ${id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
