import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

import { CreateLevelDto } from '../../application/dtos/create-level.dto';
import { UpdateLevelDto } from '../../application/dtos/update-level.dto';

import { CreateLevelUseCase } from '../../application/use-cases/create-level.use-case';
import { FindAllLevelsUseCase } from '../../application/use-cases/find-all-levels.use-case';
import { FindByIdLevelUseCase } from '../../application/use-cases/find-by-id-level.use-case';
import { UpdateLevelUseCase } from '../../application/use-cases/update-level.use-case';
import { DeleteLevelUseCase } from '../../application/use-cases/delete-level.use-case';

@ApiTags('levels')
@Controller('levels')
export class LevelController {
  constructor(
    private readonly createLevel: CreateLevelUseCase,
    private readonly findAllLevels: FindAllLevelsUseCase,
    private readonly findByIdLevel: FindByIdLevelUseCase,
    private readonly updateLevel: UpdateLevelUseCase,
    private readonly deleteLevel: DeleteLevelUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new educational level' })
  @ApiResponse({ status: 201, description: 'Level created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() dto: CreateLevelDto) {
    return this.createLevel.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all educational levels' })
  @ApiResponse({ status: 200, description: 'Levels retrieved successfully' })
  findAll() {
    return this.findAllLevels.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get educational level by ID' })
  @ApiParam({ name: 'id', description: 'Level ID' })
  @ApiResponse({ status: 200, description: 'Level retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Level not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findByIdLevel.execute(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update educational level' })
  @ApiParam({ name: 'id', description: 'Level ID' })
  @ApiResponse({ status: 200, description: 'Level updated successfully' })
  @ApiResponse({ status: 404, description: 'Level not found' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLevelDto) {
    return this.updateLevel.execute(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete educational level (soft delete)' })
  @ApiParam({ name: 'id', description: 'Level ID' })
  @ApiResponse({ status: 200, description: 'Level deleted successfully' })
  @ApiResponse({ status: 404, description: 'Level not found' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteLevel.execute(id);
  }
}
