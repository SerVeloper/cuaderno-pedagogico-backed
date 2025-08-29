import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';

import { StudentRepositoryInterface } from '../../domain/interfaces/student.repository.interface';
import { LevelRepositoryInterface } from '../../../levels/domain/interfaces/level.repository.interface';
import { StudentEntity } from '../../domain/entities/student.entity';
import { UpdateStudentDto } from '../dtos/update-student.dto';

@Injectable()
export class UpdateStudentUseCase {
  constructor(
    @Inject('StudentRepositoryInterface')
    private readonly studentRepository: StudentRepositoryInterface,
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(id: number, updateStudentDto: UpdateStudentDto): Promise<StudentEntity> {
    const existingStudent = await this.studentRepository.findById(id);
    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }

    if (updateStudentDto.Level !== undefined) {
      const level = await this.levelRepository.findById(updateStudentDto.Level);
      if (!level) {
        throw new BadRequestException(`Level with ID ${updateStudentDto.Level} does not exist.`);
      }
    }
    const student = await this.studentRepository.findById(id);

    const updatedStudent = { ...student, ...updateStudentDto };


    return this.studentRepository.update(id, updatedStudent);    
  }
}