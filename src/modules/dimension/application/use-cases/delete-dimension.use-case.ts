import { Injectable, Inject,NotFoundException } from '@nestjs/common';
import { DimensionRepositoryInterface } from '../../domain/interfaces/dimension.interface';

@Injectable()
export class DeleteDimensionUseCase {
  constructor(
    @Inject('DimensionRepositoryInterface')
    private readonly dimensionRepository: DimensionRepositoryInterface,
  ) {}

  async execute(id: number): Promise<void> {
    const existingDimension = await this.dimensionRepository.findById(id);
    if (!existingDimension) {
      throw new NotFoundException(`Dimension with ID ${id} not found`);
    }

    await this.dimensionRepository.delete(id);
  }
}