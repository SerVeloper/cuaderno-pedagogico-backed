import { Subject } from '../../domain/entities/subject.entity';
import { CreateSubjectUseCase } from '../../application/use-cases/create-subject.use-case';
import { FindAllSubjectsUseCase } from '../../application/use-cases/find-all-subject.use-case';
import { FindByIdSubjectUseCase } from '../../application/use-cases/find-by-id-subject.use-case';
import { UpdateSubjectUseCase } from '../../application/use-cases/update-subject.use-case';
import { DeleteSubjectUseCase } from '../../application/use-cases/delete-subject.use-case';
import { CreateSubjectDto } from '../../application/dtos/create-subject.dto';
import { UpdateSubjectDto } from '../../application/dtos/update-subject.dto';
import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('subjects')
@ApiBearerAuth('JWT-auth')
@Controller({
  path: 'subjects',
  version: '1'
})
export class SubjectController {
  constructor(
    @Inject('CreateSubjectUseCase')
    private readonly createSubjectUseCase: CreateSubjectUseCase,
    @Inject('FindAllSubjectsUseCase')
    private readonly findAllSubjectsUseCase: FindAllSubjectsUseCase,
    @Inject('FindByIdSubjectUseCase')
    private readonly findByIdSubjectUseCase: FindByIdSubjectUseCase,
    @Inject('UpdateSubjectUseCase')
    private readonly updateSubjectUseCase: UpdateSubjectUseCase,
    @Inject('DeleteSubjectUseCase')
    private readonly deleteSubjectUseCase: DeleteSubjectUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new subject' })
  @ApiBody({ type: CreateSubjectDto })
  @ApiResponse({ status: 201, description: 'Subject created successfully', type: Subject })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.createSubjectUseCase.execute(createSubjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all subjects' })
  @ApiResponse({ status: 200, description: 'Subjects retrieved successfully', type: [Subject] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll(): Promise<Subject[]> {
    return this.findAllSubjectsUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get subject by ID' })
  @ApiResponse({ status: 200, description: 'Subject found', type: Subject })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Subject> {
    return this.findByIdSubjectUseCase.execute(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update subject by ID' })
  @ApiBody({ type: UpdateSubjectDto })
  @ApiResponse({ status: 200, description: 'Subject updated successfully', type: Subject })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateSubjectDto: UpdateSubjectDto
  ): Promise<Subject> {
    return this.updateSubjectUseCase.execute(id, updateSubjectDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete subject by ID' })
  @ApiResponse({ status: 204, description: 'Subject deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.deleteSubjectUseCase.execute(id);
  }
}