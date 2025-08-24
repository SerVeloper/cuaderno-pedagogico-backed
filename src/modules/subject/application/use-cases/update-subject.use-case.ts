import { Subject } from '../../domain/entities/subject.entity';
import { UpdateSubjectDto } from '../dtos/update-subject.dto';
import { SubjectRepositoryInterface } from '../../domain/interfaces/subject.interface';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UpdateSubjectUseCase {
  constructor(
    @Inject('SubjectRepositoryInterface')
    private readonly subjectRepository: SubjectRepositoryInterface,
  ) {}

  async execute(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject> {
    try {
      const existingSubject = await this.subjectRepository.findById(id);
      if (!existingSubject) {
        throw new NotFoundException('Subject not found');
      }
      
      // Crear un objeto parcial con solo los campos a actualizar
      const updateData: Partial<Subject> = {};
      if (updateSubjectDto.Name !== undefined) updateData.Name = updateSubjectDto.Name;
      if (updateSubjectDto.LevelId !== undefined) updateData.LevelId = updateSubjectDto.LevelId;
      if (updateSubjectDto.EvaluationType !== undefined) updateData.EvaluationType = updateSubjectDto.EvaluationType;

      const updatedSubject = await this.subjectRepository.update(id, updateData);
      if (!updatedSubject) {
        throw new NotFoundException('Subject not found after update');
      }
      
      return updatedSubject;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Failed to update subject: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
