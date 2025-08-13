import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { DepartmentsRepositoryInterface } from '../../../departments/domain/interfaces/department.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { UpdateProvinceDto } from '../dtos/update-province.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Injectable()
export class UpdateProvinceUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provincesRepository: ProvincesRepositoryInterface,
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentsRepository: DepartmentsRepositoryInterface,
  ) {}

  @ApiOperation({ summary: 'Update a province' })
  @ApiResponse({ status: 200, description: 'The province has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Province not found.' })
  @ApiResponse({ status: 400, description: 'Invalid data provided.' })
  async execute(id: number, updateProvinceDto: UpdateProvinceDto): Promise<ProvinceEntity> {
    const existingProvince = await this.provincesRepository.findById(id);
    if (!existingProvince) {
      throw new NotFoundException('Province with ID ${id} not found.');
    }

    if (updateProvinceDto.DepartmentId !== undefined) {
      const department = await this.departmentsRepository.findById(updateProvinceDto.DepartmentId);
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
      return await this.provincesRepository.update(id, province);
    } catch (error) {
      if (error instanceof Error && (error.message.includes('ER_NO_REFERENCED_ROW') || error.message.includes('23503'))) {
        throw new BadRequestException(`Department with ID ${updateProvinceDto.DepartmentId} does not exist`);
      }
      throw new BadRequestException(`Failed to update province: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
