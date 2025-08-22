import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';

@Injectable()
export class FindAllProvincesUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provinceRepositoryInterface: ProvincesRepositoryInterface,
  ) {}

  async execute(): Promise<ProvinceEntity[]> {
    try {
      return await this.provinceRepositoryInterface.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve provinces: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
