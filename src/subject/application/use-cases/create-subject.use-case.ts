import { Subject } from '../../domain/entities/subject.entity';
import { CreateSubjectDto } from '../dtos/create-subject.dto';
import { SubjectRepositoryInterface } from '../../domain/interfaces/subject.interface';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateSubjectUseCase {
  constructor(
    @Inject('SubjectRepositoryInterface')
    private readonly subjectRepository: SubjectRepositoryInterface,
  ) {}

  async execute(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    
    if (createSubjectDto.LevelId <= 0) {
      throw new BadRequestException('LevelId must be a positive number');
    }

    const subject = new Subject(
      0, 
      createSubjectDto.Name.trim(), 
      createSubjectDto.LevelId,
      createSubjectDto.EvaluationType,
      new Date(), 
      new Date()  
    );

    try {
      return await this.subjectRepository.create(subject);
    } catch (error) {
      throw new BadRequestException(`Failed to create subject: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
