import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateProvinceDto } from '../dtos/create-province.dto';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { DepartmentsRepositoryInterface } from '../../../departments/domain/interfaces/department.repository.interface';

@Injectable()
export class CreateProvinceUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provinceRepository: ProvincesRepositoryInterface,
    @Inject('DepartmentsRepositoryInterface')
    private readonly departmentRepository: DepartmentsRepositoryInterface,
  ) {}

  @ApiOperation({ summary: 'Create a new province' })
  @ApiResponse({ status: 201, description: 'Province created', type: ProvinceEntity })
  @ApiResponse({ status: 400, description: 'Invalid department ID or other error' })
  async execute(createProvinceDto: CreateProvinceDto): Promise<ProvinceEntity> {
    const department = await this.departmentRepository.findById(createProvinceDto.department_id);
    if (!department) {
      throw new BadRequestException(`Department with ID ${createProvinceDto.department_id} does not exist`);
    }
    const newProvince = {
      name: createProvinceDto.name,
      description: createProvinceDto.description ?? '',
      is_active: createProvinceDto.is_active,
      department_id: createProvinceDto.department_id,
    };

    try {
      return await this.provinceRepository.create(newProvince);
    } catch (error) {
      if (error instanceof Error && (error.message.includes('ER_NO_REFERENCED_ROW') || error.message.includes('23503'))) {
        throw new BadRequestException(`Department with ID ${createProvinceDto.department_id} does not exist`);
      }
      throw new BadRequestException(`Failed to create province: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
