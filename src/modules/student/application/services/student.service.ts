import { Injectable, Inject } from '@nestjs/common';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { UpdateStudentDto } from '../dtos/update-student.dto';
import { CreateStudentUseCase } from '../use-cases/create-student.use-case';
import { FindAllStudentUseCase } from '../use-cases/find-all-student.use-case';
import { FindByIdStudentUseCase } from '../use-cases/find-by-id-student.use-case';
import { UpdateStudentUseCase } from '../use-cases/update-student.use-case';
import { DeleteStudentUseCase } from '../use-cases/delete-student.use-case';
import { StudentEntity } from '../../domain/entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @Inject('CreateStudentUseCase')
    private readonly createStudentUseCase: CreateStudentUseCase,
    @Inject('FindAllStudentUseCase')
    private readonly findAllStudentUseCase: FindAllStudentUseCase,
    @Inject('FindByIdStudentUseCase')
    private readonly findByIdStudentUseCase: FindByIdStudentUseCase,
    @Inject('UpdateStudentUseCase')
    private readonly updateStudentUseCase: UpdateStudentUseCase,
    @Inject('DeleteStudentUseCase')
    private readonly deleteStudentUseCase: DeleteStudentUseCase,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    return this.createStudentUseCase.execute(createStudentDto);
  }

  async findAll(): Promise<StudentEntity[]> {
    return this.findAllStudentUseCase.execute();
  }

  async findById(id: number): Promise<StudentEntity | null> {
    return this.findByIdStudentUseCase.execute(id);
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<StudentEntity> {
    return this.updateStudentUseCase.execute(id, updateStudentDto);
  }

  async delete(id: number): Promise<void> {
    return this.deleteStudentUseCase.execute(id);
  }
}