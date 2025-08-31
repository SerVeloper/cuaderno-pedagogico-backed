import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateDepartmentDto } from '../dtos/create-department.dto';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { DepartmentsRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
@Injectable()
export class CreateDepartmentUseCase {
  constructor(
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentRepository: DepartmentsRepositoryInterface,
  ) {}

  async execute( createDepartmentDto: CreateDepartmentDto): Promise<DepartmentEntity> {
    const newDepartment = {
      Name: createDepartmentDto.Name,
      Description: createDepartmentDto.Description ?? '',
      IsActive: createDepartmentDto.IsActive ?? true,
    };

    try {
      return await this.departmentRepository.create(newDepartment);
    } catch (error) {
      throw new BadRequestException(`Failed to create department: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
