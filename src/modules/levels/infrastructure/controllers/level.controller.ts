import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { CreateLevelDto } from '../../application/dtos/create-level.dto';
import { UpdateLevelDto } from '../../application/dtos/update-level.dto';
import { CreateLevelUseCase } from '../../application/use-cases/create-level.use-case';
import { FindAllLevelsUseCase } from '../../application/use-cases/find-all-levels.use-case';
import { FindByIdLevelUseCase } from '../../application/use-cases/find-by-id-level.use-case';
import { UpdateLevelUseCase } from '../../application/use-cases/update-level.use-case';
import { DeleteLevelUseCase } from '../../application/use-cases/delete-level.use-case';
import { LevelEntity } from '../../domain/entities/level.entity';

@ApiTags('levels')
@ApiBearerAuth()
@Controller({
  path: 'levels',
  version: '1'
})
export class LevelController {
  constructor(
    private readonly createLevel: CreateLevelUseCase,
    private readonly findAllLevels: FindAllLevelsUseCase,
    private readonly findByIdLevel: FindByIdLevelUseCase,
    private readonly updateLevel: UpdateLevelUseCase,
    private readonly deleteLevel: DeleteLevelUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new educational level' })
  @ApiResponse({ status: 201, description: 'Level created successfully', type: LevelEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async create(@Body() dto: CreateLevelDto): Promise<LevelEntity> {
    return this.createLevel.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all educational levels' })
  @ApiResponse({ status: 200, description: 'Levels retrieved successfully', type: [LevelEntity] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll(): Promise<LevelEntity[]> {
    return this.findAllLevels.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get educational level by ID' })
  @ApiParam({ name: 'id', description: 'Level ID' })
  @ApiResponse({ status: 200, description: 'Level retrieved successfully', type: LevelEntity })
  @ApiResponse({ status: 404, description: 'Level not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<LevelEntity | null> {
    return this.findByIdLevel.execute(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update educational level' })
  @ApiParam({ name: 'id', description: 'Level ID' })
  @ApiResponse({ status: 200, description: 'Level updated successfully', type: LevelEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 404, description: 'Level not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLevelDto): Promise<LevelEntity> {
    return this.updateLevel.execute(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete an educational level' })
  @ApiParam({ name: 'id', description: 'Level ID' })
  @ApiResponse({ status: 204, description: 'Level deleted successfully' })
  @ApiResponse({ status: 404, description: 'Level not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.deleteLevel.execute(id);
  }
}
