import { Injectable, Inject } from '@nestjs/common';
import { Dimension } from '../../domain/entities/dimension.entity';
import { CreateDimensionDto } from '../dtos/create-dimension.dto';
import { UpdateDimensionDto } from '../dtos/update-dimension.dto';
import  { CreateDimensionUseCase } from '../use-cases/create-dimension.use-case';
import { FindAllDimensionUseCase } from '../use-cases/find-all-dimension.use-case';
import { UpdateDimensionUseCase } from '../use-cases/update-dimension.use-case';
import { FindByIdDimensionUseCase } from '../use-cases/find-by-id-dimension.use-case';
import { DeleteDimensionUseCase } from '../use-cases/delete-dimension.use-case';

@Injectable()
export class DimensionService { 
  constructor(
    @Inject('CreateDimensionUseCase')
    private readonly createDimensionUseCase: CreateDimensionUseCase,
    @Inject('FindAllDimensionUseCase')
    private readonly findAllDimensionUseCase: FindAllDimensionUseCase,
    @Inject('UpdateDimensionUseCase')
    private readonly updateDimensionUseCase: UpdateDimensionUseCase,
    @Inject('FindByIdDimensionUseCase')
    private readonly findByIdDimensionUseCase: FindByIdDimensionUseCase,
    @Inject('DeleteDimensionUseCase')
    private readonly deleteDimensionUseCase: DeleteDimensionUseCase
  ) {}

  async create(createDimensionDto: CreateDimensionDto): Promise<Dimension> {
    return this.createDimensionUseCase.execute(createDimensionDto);
  }

  async findAll(): Promise<Dimension[]> {
    return this.findAllDimensionUseCase.execute();
  }

  async findById(id: number): Promise<Dimension> {
    return this.findByIdDimensionUseCase.execute(id);
  }

  async update(id: number, updateDimensionDto: UpdateDimensionDto): Promise<Dimension> {
    return this.updateDimensionUseCase.execute(id, updateDimensionDto);
  }

  async delete(id: number): Promise<void> {
    return this.deleteDimensionUseCase.execute(id);
  }
}