import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';

@Injectable()
export class FindByIdDepartmentUseCase {
  constructor(
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentRepositoryInterface: DepartmentsRepositoryInterface,
  ) {}

  async execute(id: number): Promise<DepartmentEntity | null> {
    const department = await this.departmentRepositoryInterface.findById(id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    return department;
  }
  catch(error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new BadRequestException(`Failed to retrieve department: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
