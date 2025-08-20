import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateProvinceDto } from '../dtos/create-province.dto';
import { ProvinceEntity } from '../../domain/entities/province.entity';
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

  async execute(createProvinceDto: CreateProvinceDto): Promise<ProvinceEntity> {
    const department = await this.departmentRepository.findById(createProvinceDto.DepartmentId);
    if (!department) {
      throw new BadRequestException(`Department with ID ${createProvinceDto.DepartmentId} does not exist`);
    }
    const newProvince = {
      Name: createProvinceDto.Name,
      Description: createProvinceDto.Description ?? '',
      IsActive: createProvinceDto.IsActive,
      DepartmentId: createProvinceDto.DepartmentId,
    };

    try {
      return await this.provinceRepository.create(newProvince);
    } catch (error) {
      if (error instanceof Error && (error.message.includes('ER_NO_REFERENCED_ROW') || error.message.includes('23503'))) {
        throw new BadRequestException(`Department with ID ${createProvinceDto.DepartmentId} does not exist`);
      }
      throw new BadRequestException(`Failed to create province: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
