import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProvinceDto } from '../../application/dtos/create-province.dto';
import { UpdateProvinceDto } from '../../application/dtos/update-province.dto';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProvinceService } from '../../application/services/province.service';


@ApiTags('provinces')
@ApiBearerAuth()
@Controller({
  path: 'provinces',
  version: '1' 
})
export class ProvinceController {
  constructor(
    private readonly provinceService: ProvinceService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new province' })
  @ApiResponse({ status: 201, description: 'Province created successfully', type: ProvinceEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async create(@Body() dto: CreateProvinceDto) : Promise<ProvinceEntity> {
    return this.provinceService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all provinces' })
  @ApiResponse({ status: 200, description: 'List of provinces retrieved successfully', type: [ProvinceEntity] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll() : Promise<ProvinceEntity[]> {
    return this.provinceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get province by ID' })
  @ApiResponse({ status: 200, description: 'Province found', type: ProvinceEntity })
  @ApiResponse({ status: 404, description: 'Province not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findById(@Param('id', ParseIntPipe) id: number) : Promise<ProvinceEntity | null> {
    return this.provinceService.findById(id);
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
    return this.provinceService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete a province' })
  @ApiResponse({ status: 204, description: 'Province deleted successfully' })
  @ApiResponse({ status: 404, description: 'Province not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.provinceService.delete(id);
  }

  @Get('by-department/:departmentId')
  @ApiOperation({ summary: 'Get provinces by Department ID' })
  @ApiResponse({ status: 200, description: 'List of provinces retrieved successfully', type: [ProvinceEntity] })
  @ApiResponse({ status: 400, description: 'Invalid Department ID' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findByDepartmentId(@Param('departmentId', ParseIntPipe) departmentId: number) : Promise<ProvinceEntity[]> {
    return this.provinceService.findByDepartmentId(departmentId);
  }
}