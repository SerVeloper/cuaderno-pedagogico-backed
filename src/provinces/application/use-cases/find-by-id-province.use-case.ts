import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from 'src/provinces/domain/interfaces/province.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Injectable()
export class FindProvinceByIdUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provinceRepositoryInterface: ProvincesRepositoryInterface,
  ) {}

  @ApiOperation({ summary: 'Find province by ID' })
  @ApiResponse({ status: 200, description: 'Province found', type: ProvinceEntity })
  @ApiResponse({ status: 404, description: 'Province not found' })
  async execute(id: number): Promise<ProvinceEntity> {
    const province = await this.provinceRepositoryInterface.findById(id);
    if (!province) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    return province;
  }
  catch(error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new BadRequestException(`Failed to retrieve province: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
