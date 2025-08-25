import { Injectable } from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
import { CreateDepartmentDto } from '../dtos/create-department.dto';
import { DepartmentEntity } from '../../domain/entities/department.entity';

@Injectable()
export class CreateDepartmentUseCase {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  async execute( createDepartmentDto: CreateDepartmentDto): Promise<DepartmentEntity> {
    const newDepartment = new DepartmentEntity(
      0,
      createDepartmentDto.Name,
      createDepartmentDto.Description ?? '',
      createDepartmentDto.IsActive ?? true,
      new Date(),
      new Date(),
    );

    return await this.departmentService.create(newDepartment);
  }
}
