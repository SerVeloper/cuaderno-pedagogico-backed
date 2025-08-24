import { Inject, Injectable } from '@nestjs/common';
import { Subject } from '../../domain/entities/subject.entity';
import { CreateSubjectDto } from '../dtos/create-subject.dto';
import { UpdateSubjectDto } from '../dtos/update-subject.dto';
import { CreateSubjectUseCase } from '../use-cases/create-subject.use-case';
import { DeleteSubjectUseCase } from '../use-cases/delete-subject.use-case';
import { FindAllSubjectsUseCase } from '../use-cases/find-all-subject.use-case';
import { FindByIdSubjectUseCase } from '../use-cases/find-by-id-subject.use-case';
import { UpdateSubjectUseCase } from '../use-cases/update-subject.use-case';

@Injectable()
export class SubjectService {
  constructor(
    @Inject('CreateSubjectUseCase')
    private readonly createSubjectUseCase: CreateSubjectUseCase,
    @Inject('UpdateSubjectUseCase')
    private readonly updateSubjectUseCase: UpdateSubjectUseCase,
    @Inject('FindAllSubjectsUseCase')
    private readonly findAllSubjectsUseCase: FindAllSubjectsUseCase,
    @Inject('FindByIdSubjectUseCase')
    private readonly findByIdSubjectUseCase: FindByIdSubjectUseCase,
    @Inject('DeleteSubjectUseCase')
    private readonly deleteSubjectUseCase: DeleteSubjectUseCase
  ) {}

  async create(dto: CreateSubjectDto): Promise<Subject> {
    return this.createSubjectUseCase.execute(dto);
  }

  async update(id: number, dto: UpdateSubjectDto): Promise<Subject> {
    return this.updateSubjectUseCase.execute(id, dto);
  }

  async findAll(): Promise<Subject[]> {
    return this.findAllSubjectsUseCase.execute();
  }

  async findById(id: number): Promise<Subject> {
    return this.findByIdSubjectUseCase.execute(id);
  }

  async delete(id: number): Promise<void> {
    return this.deleteSubjectUseCase.execute(id);
  }
}
