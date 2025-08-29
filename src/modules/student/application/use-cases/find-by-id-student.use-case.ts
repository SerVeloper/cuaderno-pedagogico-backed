import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { StudentRepositoryInterface } from '../../domain/interfaces/student.repository.interface';
import { StudentEntity } from '../../domain/entities/student.entity';

@Injectable()
export class FindByIdStudentUseCase {
  constructor(
    @Inject('StudentRepositoryInterface')
    private readonly studentRepository: StudentRepositoryInterface,
  ) {}

  async execute(id: number): Promise<StudentEntity> {
    try {
      const student = await this.studentRepository.findById(id);
      if (!student) {
        throw new NotFoundException(`Student with ID ${id} not found`);
      }
      return student;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Failed to retrieve student: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}