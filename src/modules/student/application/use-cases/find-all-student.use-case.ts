import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { StudentRepositoryInterface } from '../../domain/interfaces/student.repository.interface';
import { StudentEntity } from '../../domain/entities/student.entity';

@Injectable()
export class FindAllStudentUseCase {
  constructor(
    @Inject('StudentRepositoryInterface')
    private readonly studentRepository: StudentRepositoryInterface,
  ) {}

  async execute(): Promise<StudentEntity[]> {
    try {
      return await this.studentRepository.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve students: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}