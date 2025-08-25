import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { DimensionRepositoryInterface } from '../../domain/interfaces/dimension.interface';
import { Dimension } from '../../domain/entities/dimension.entity';

@Injectable()
export class FindAllDimensionUseCase {
  constructor(
    @Inject('DimensionRepositoryInterface')
    private readonly dimensionRepository: DimensionRepositoryInterface,
  ) {}

  async execute(): Promise<Dimension[]> {
    try {
      return await this.dimensionRepository.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve dimensions: ${error.message}`);
    }
  }
}