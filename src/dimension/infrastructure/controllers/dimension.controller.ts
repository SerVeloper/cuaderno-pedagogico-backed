import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Inject } from '@nestjs/common';
import { CreateDimensionUseCase } from '../../application/use-cases/create-dimension.use-case';
import { FindAllDimensionUseCase } from '../../application/use-cases/find-all-dimension.use-case';
import { FindByIdDimensionUseCase } from '../../application/use-cases/find-by-id-dimension.use-case';
import { UpdateDimensionUseCase } from '../../application/use-cases/update-dimension.use-case';
import { DeleteDimensionUseCase } from '../../application/use-cases/delete-dimension.use-case';
import { CreateDimensionDto } from '../../application/dtos/create-dimension.dto';
import { UpdateDimensionDto } from '../../application/dtos/update-dimension.dto';
import { Dimension } from '../../domain/entities/dimension.entity';

@Controller('dimensions')
export class DimensionController {
  constructor(
    @Inject('CreateDimensionUseCase')
    private readonly createDimensionUseCase: CreateDimensionUseCase,
    @Inject('FindAllDimensionUseCase')
    private readonly findAllDimensionUseCase: FindAllDimensionUseCase,
    @Inject('FindByIdDimensionUseCase')
    private readonly findByIdDimensionUseCase: FindByIdDimensionUseCase,
    @Inject('UpdateDimensionUseCase')
    private readonly updateDimensionUseCase: UpdateDimensionUseCase,
    @Inject('DeleteDimensionUseCase')
    private readonly deleteDimensionUseCase: DeleteDimensionUseCase,
  ) {}
  @Post()
  async create(@Body() createDimensionDto: CreateDimensionDto): Promise<Dimension> {
    return this.createDimensionUseCase.execute(createDimensionDto);
  }
  @Get()
  async findAll(): Promise<Dimension[]> {
    return this.findAllDimensionUseCase.execute();
  }
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Dimension> {
    return this.findByIdDimensionUseCase.execute(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateDimensionDto: UpdateDimensionDto): Promise<Dimension> {
    return this.updateDimensionUseCase.execute(id, updateDimensionDto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.deleteDimensionUseCase.execute(id);
  }
}
