import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Injectable()
export class FindAllProvincesUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provinceRepositoryInterface: ProvincesRepositoryInterface,
  ) {}

  @ApiOperation({ summary: 'Find all provinces' })
  @ApiResponse({ status: 200, description: 'List of provinces', type: [ProvinceEntity] })
  async execute(): Promise<ProvinceEntity[]> {
    try {
      return await this.provinceRepositoryInterface.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve provinces: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
