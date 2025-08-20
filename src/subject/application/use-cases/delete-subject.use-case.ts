import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SubjectRepositoryInterface } from '../../domain/interfaces/subject.interface';

@Injectable()
export class DeleteSubjectUseCase {
  constructor(
    @Inject('SubjectRepositoryInterface')
    private readonly subjectRepository: SubjectRepositoryInterface,
  ) {}

  async execute(id: number): Promise<void> {
    try {
      const subject = await this.subjectRepository.delete(id);
      if (!subject) {
        throw new NotFoundException(`Subject with ID ${id} not found`);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Failed to delete subject: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
