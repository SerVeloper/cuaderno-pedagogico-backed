import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
@Injectable()
export class FindAllDepartmentsUseCase {
  constructor(
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentRepositoryInterface: DepartmentsRepositoryInterface,
  ) {}

  async execute(): Promise<DepartmentEntity[]> {
    try {
      return await this.departmentRepositoryInterface.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve departments: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
