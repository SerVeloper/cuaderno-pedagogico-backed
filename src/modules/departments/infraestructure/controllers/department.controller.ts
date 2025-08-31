import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateDepartmentDto } from '../../application/dtos/create-department.dto';
import { UpdateDepartmentDto } from '../../application/dtos/update-department.dto';
import { DepartmentEntity } from '../../domain/entities/department.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DepartmentService } from '../../application/services/department.service';

@ApiTags('departments')
@ApiBearerAuth()
@Controller({
  path: 'departments',
  version: '1'
})
export class DepartmentController {
  constructor(
    private readonly departmentService: DepartmentService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new department' })
  @ApiResponse({ status: 201, description: 'Department created successfully', type: DepartmentEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async create(@Body() dto: CreateDepartmentDto) : Promise<DepartmentEntity> {
    return this.departmentService.create(dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all departments' })
  @ApiResponse({ status: 200, description: 'List of departments retrieved successfully', type: [DepartmentEntity] })
  @ApiResponse({ status: 404, description: 'Departments not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get department by ID' })
  @ApiResponse({ status: 200, description: 'Department found', type: DepartmentEntity })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.departmentService.findById(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update department by ID' })
  @ApiResponse({ status: 200, description: 'Department updated successfully', type: DepartmentEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() dto: UpdateDepartmentDto
  ): Promise<DepartmentEntity> {
    return this.departmentService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete department by ID' })
  @ApiResponse({ status: 204, description: 'Department deleted successfully' })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async delete(@Param('id', ParseIntPipe) id: number) : Promise<void> {
    return this.departmentService.delete(id);
  }
}
