import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';
import { DepartmentService } from '../services/department.service';

@Injectable()
export class UpdateDepartmentUseCase {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  async execute(id: number, updateData: UpdateDepartmentDto): Promise<DepartmentEntity> {
    const existing = await this.departmentService.findById(id);
    if (!existing) throw new NotFoundException(`Department ${id} not found`);

    // 1. Crear objeto de actualización con validación explícita
    const updatePayload: Partial<DepartmentEntity> = {};
    
    if (updateData.name !== undefined) updatePayload.name = updateData.name;
    if (updateData.description !== undefined) updatePayload.description = updateData.description;
    if (updateData.isActive !== undefined) updatePayload.isActive = updateData.isActive;
    
    updatePayload.updatedAt = new Date();

    // 2. Construir entidad completa
    const updatedEntity: DepartmentEntity = {
      departmentID: existing.departmentID,
      name: updatePayload.name ?? existing.name,
      description: updatePayload.description ?? existing.description,
      isActive: updatePayload.isActive ?? existing.isActive,
      createdAt: existing.createdAt,
      updatedAt: updatePayload.updatedAt
    };

    // 3. Ejecutar actualización
    const updated = await this.departmentService.update(id, updatedEntity);
    if (!updated) throw new InternalServerErrorException('Update failed');
    
    return updated;
  }
}