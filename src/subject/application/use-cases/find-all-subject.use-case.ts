import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Subject } from '../../domain/entities/subject.entity';
import { SubjectRepositoryInterface } from '../../domain/interfaces/subject.interface';


@Injectable()
export class FindAllSubjectsUseCase {
  constructor(
    @Inject('SubjectRepositoryInterface')
    private readonly subjectRepository: SubjectRepositoryInterface,
  ) {}

  async execute(): Promise<Subject[]> {
    try {
      return await this.subjectRepository.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to find subjects: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}