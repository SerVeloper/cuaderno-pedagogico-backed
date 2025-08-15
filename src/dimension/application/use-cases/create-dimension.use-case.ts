import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Dimension } from '../../domain/entities/dimension.entity';
import { CreateDimensionDto } from '../dtos/create-dimension.dto';
import { DimensionRepositoryInterface } from '../../domain/interfaces/dimension.interface';

@Injectable()
export class CreateDimensionUseCase {
  constructor(
    @Inject('DimensionRepositoryInterface')
    private readonly dimensionRepository: DimensionRepositoryInterface,
  ) {}

  async execute(createDimensionDto: CreateDimensionDto): Promise<Dimension> {
    const dimension = new Dimension(
      0,
      createDimensionDto.name,
      createDimensionDto.description,
      createDimensionDto.subjectId,
      createDimensionDto.courseId,
      true,
      new Date(),
      new Date()
    );

    try {
      return await this.dimensionRepository.create(dimension);
    } catch (error) {
      throw new BadRequestException(`Failed to create dimension: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}