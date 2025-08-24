import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Subject } from '../../domain/entities/subject.entity';
import { SubjectRepositoryInterface } from '../../domain/interfaces/subject.interface';

@Injectable()
export class FindByIdSubjectUseCase {
  constructor(
    @Inject('SubjectRepositoryInterface')
    private readonly subjectRepository: SubjectRepositoryInterface,
  ) {}

  async execute(id: number): Promise<Subject> {
    try {
      const subject = await this.subjectRepository.findById(id);
      if (!subject) {
        throw new NotFoundException(`Subject with ID ${id} not found`);
      }
      return subject;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Failed to find subject: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}