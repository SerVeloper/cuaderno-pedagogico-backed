import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { DimensionRepositoryInterface } from '../../domain/interfaces/dimension.interface';
import { Dimension } from '../../domain/entities/dimension.entity';

@Injectable()
export class FindByIdDimensionUseCase {
  constructor(
    @Inject('DimensionRepositoryInterface')
    private readonly dimensionRepository: DimensionRepositoryInterface,
  ) {}

  async execute(id: number): Promise<Dimension> {
    if (!id || id <= 0) {
      throw new BadRequestException('Invalid ID provided');
    }

    const dimension = await this.dimensionRepository.findById(id);
    if (!dimension) {
      throw new NotFoundException(`Dimension with ID ${id} not found`);
    }
    return dimension;
  }
}