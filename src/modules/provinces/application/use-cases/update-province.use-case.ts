import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { DepartmentsRepositoryInterface } from '../../../departments/domain/interfaces/department.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { UpdateProvinceDto } from '../dtos/update-province.dto';

@Injectable()
export class UpdateProvinceUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provincesRepositoryInterface: ProvincesRepositoryInterface,
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentsRepositoryInterface: DepartmentsRepositoryInterface,
  ) {}

  async execute(id: number, updateProvinceDto: UpdateProvinceDto): Promise<ProvinceEntity> {
    const existingProvince = await this.provincesRepositoryInterface.findById(id);
    if (!existingProvince) {
      throw new NotFoundException(`Province with ID ${id} not found.`);
    }

    if (updateProvinceDto.DepartmentId !== undefined) {
      const department = await this.departmentsRepositoryInterface.findById(updateProvinceDto.DepartmentId);
      if (!department) {
        throw new BadRequestException('Department with ID ${updateProvinceDto.DepartmentId} does not exist.');
      }
    }

    const province = {
      Name: updateProvinceDto.Name ?? existingProvince.Name,
      Description: updateProvinceDto.Description ?? existingProvince.Description,
      IsActive: updateProvinceDto.IsActive ?? existingProvince.IsActive,
      DepartmentId: updateProvinceDto.DepartmentId ?? existingProvince.DepartmentId,
    };

    try {
      return await this.provincesRepositoryInterface.update(id, province);
    } catch (error) {
      if (error instanceof Error && (error.message.includes('ER_NO_REFERENCED_ROW') || error.message.includes('23503'))) {
        throw new BadRequestException(`Department with ID ${updateProvinceDto.DepartmentId} does not exist`);
      }
      throw new BadRequestException(`Failed to update province: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
