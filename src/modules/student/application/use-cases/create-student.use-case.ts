import { Injectable,Inject } from '@nestjs/common';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { StudentEntity } from '../../domain/entities/student.entity';
import { StudentRepositoryInterface } from '../../domain/interfaces/student.repository.interface';
import { LevelRepositoryInterface } from '../../../levels/domain/interfaces/level.repository.interface';


@Injectable()
export class CreateStudentUseCase {
  constructor(
    @Inject('StudentRepositoryInterface')
    private readonly studentRepository: StudentRepositoryInterface,
    @Inject('LevelRepositoryInterface')
    private readonly levelRepository: LevelRepositoryInterface,
  ) {}

  async execute(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    const level = await this.levelRepository.findById(createStudentDto.Level);
    if (!level) {
      throw new Error(`Level with ID ${createStudentDto.Level} does not exist`);
    }
    
    const newStudent = {
      FirstName: createStudentDto.FirstName,
      LastName: createStudentDto.LastName,
      IdentityNumber: createStudentDto.IdentityNumber,
      Gender: createStudentDto.Gender,
      BirthDate: createStudentDto.BirthDate,
      Address: createStudentDto.Address,
      Phone: createStudentDto.Phone,
      GuardianName: createStudentDto.GuardianName,
      GuardianPhone: createStudentDto.GuardianPhone,
      Level: createStudentDto.Level,
      Course: createStudentDto.Course,
      Section: createStudentDto.Section,
    };

    return this.studentRepository.create(newStudent);
  }
}