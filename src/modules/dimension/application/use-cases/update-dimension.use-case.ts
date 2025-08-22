import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { DimensionRepositoryInterface } from '../../domain/interfaces/dimension.interface';
import { Dimension } from '../../domain/entities/dimension.entity';
import { UpdateDimensionDto } from '../dtos/update-dimension.dto';

@Injectable()
export class UpdateDimensionUseCase {
  constructor(
    @Inject('DimensionRepositoryInterface')
    private readonly dimensionRepository: DimensionRepositoryInterface,
  ) {}

   async execute(id: number, updateDimensionDto: UpdateDimensionDto): Promise<Dimension> {

    try {
      const existingDimension = await this.dimensionRepository.findById(id);
      if (!existingDimension) {
        throw new NotFoundException(`Dimension with ID ${id} not found`);
      }
      const updatedDimension = { ...existingDimension, ...updateDimensionDto };
      updatedDimension.UpdatedAt = new Date(); 

      const result = await this.dimensionRepository.update(id, updatedDimension);
      if (!result) {
        throw new BadRequestException(`Failed to update dimension with ID ${id}`);
      }
      return result;
    }
    catch (error) {
      throw new BadRequestException(`Failed to update dimension: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}