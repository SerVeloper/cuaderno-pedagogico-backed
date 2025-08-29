import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateStudentDto } from '../../application/dtos/create-student.dto';
import { UpdateStudentDto } from '../../application/dtos/update-student.dto';
import { StudentEntity } from '../../domain/entities/student.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentService } from '../../application/services/student.service';  

@ApiTags('students')
@ApiBearerAuth()
@Controller({
  path: 'students',
  version: '1',
})  
export class StudentController {
  constructor(
    private readonly studentService: StudentService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new student' })
  @ApiResponse({ status: 201, description: 'Student created successfully', type: StudentEntity })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async create(@Body() dto: CreateStudentDto) : Promise<StudentEntity> {
    return this.studentService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  @ApiResponse({ status: 200, description: 'List of students retrieved successfully', type: [StudentEntity] })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll() : Promise<StudentEntity[]> {
    return this.studentService.findAll();
  }


  
  @Get(':id')
  @ApiOperation({ summary: 'Get student by ID' })
  @ApiResponse({ status: 200, description: 'Student found', type: StudentEntity })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findById(@Param('id', ParseIntPipe) id: number) : Promise<StudentEntity | null> {
    return this.studentService.findById(id);
  }



  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update student by ID' })
  @ApiResponse({ status: 200, description: 'Student updated successfully', type: StudentEntity })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStudentDto) : Promise<StudentEntity> {
    return this.studentService.update(id, dto);
  }



  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete student by ID' })
  @ApiResponse({ status: 204, description: 'Student deleted successfully' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async delete(@Param('id', ParseIntPipe) id: number) : Promise<void> {
    return this.studentService.delete(id);
  }
} 