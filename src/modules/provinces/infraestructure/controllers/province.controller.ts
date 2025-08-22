import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Inject, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProvinceDto } from '../../application/dtos/create-province.dto';
import { UpdateProvinceDto } from '../../application/dtos/update-province.dto';
import { CreateProvinceUseCase } from '../../application/use-cases/create-province.use-case';
import { FindAllProvincesUseCase } from '../../application/use-cases/find-all-province.use-case';
import { FindProvinceByIdUseCase } from '../../application/use-cases/find-by-id-province.use-case';
import { UpdateProvinceUseCase } from '../../application/use-cases/update-province.use-case';
import { DeleteProvinceUseCase } from '../../application/use-cases/delete-province.use-case';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('provinces')
@ApiBearerAuth()
@Controller({
  path: 'provinces',
  version: '1' 
})
export class ProvinceController {
  constructor(
    @Inject('CreateProvinceUseCase')
    private readonly createProvince: CreateProvinceUseCase,
    @Inject('FindAllProvincesUseCase')
    private readonly findAllProvinces: FindAllProvincesUseCase,
    @Inject('FindProvinceByIdUseCase')
    private readonly findProvinceById: FindProvinceByIdUseCase,
    @Inject('UpdateProvinceUseCase')
    private readonly updateProvince: UpdateProvinceUseCase,
    @Inject('DeleteProvinceUseCase')
    private readonly deleteProvince: DeleteProvinceUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new province' })
  @ApiResponse({ status: 201, description: 'Province created successfully', type: ProvinceEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async create(@Body() dto: CreateProvinceDto) : Promise<ProvinceEntity> {
    return this.createProvince.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all provinces' })
  @ApiResponse({ status: 200, description: 'List of provinces retrieved successfully', type: [ProvinceEntity] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll() : Promise<ProvinceEntity[]> {
    return this.findAllProvinces.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get province by ID' })
  @ApiResponse({ status: 200, description: 'Province found', type: ProvinceEntity })
  @ApiResponse({ status: 404, description: 'Province not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findById(@Param('id', ParseIntPipe) id: number) : Promise<ProvinceEntity | null> {
    return this.findProvinceById.execute(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update province by ID' })
  @ApiResponse({ status: 200, description: 'Province updated successfully', type: ProvinceEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 404, description: 'Province not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() dto: UpdateProvinceDto
  ): Promise<ProvinceEntity> {
    return this.updateProvince.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete a province' })
  @ApiResponse({ status: 204, description: 'Province deleted successfully' })
  @ApiResponse({ status: 404, description: 'Province not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.deleteProvince.execute(id);
  }
}