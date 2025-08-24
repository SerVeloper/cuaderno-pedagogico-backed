import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
@Injectable()
export class DeleteDepartmentUseCase {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  async execute(id: number): Promise<void> {
    const department = await this.departmentService.findById(id);
    if (!department) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    await this.departmentService.delete(id);
  }
}
