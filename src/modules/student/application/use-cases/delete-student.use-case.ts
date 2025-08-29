import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { StudentRepositoryInterface } from '../../domain/interfaces/student.repository.interface';


@Injectable()export class DeleteStudentUseCase {
  constructor(
    @Inject('StudentRepositoryInterface')
    private readonly studentRepository: StudentRepositoryInterface,
  ) {}

  async execute(id: number): Promise<void> {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
  if (student.DeletedAt) {
      throw new BadRequestException(`Student with ID ${id} is already deleted`);
    }
    try {
      await this.studentRepository.delete(id, {DeletedAt: new Date()});
    } catch (error) {
      throw new BadRequestException(`Failed to delete student with ID ${id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}