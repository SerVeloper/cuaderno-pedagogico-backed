import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { StudentRepositoryInterface } from '../../domain/interfaces/student.repository.interface';
import { StudentEntity } from '../../domain/entities/student.entity';
import { StudentOrmEntity} from './student.orm.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelOrmEntity } from '../../../levels/infrastructure/repositories/level.orm.entity';

@Injectable()
export class StudentRepository implements StudentRepositoryInterface {
  constructor(
    @InjectRepository(StudentOrmEntity)
    private readonly studentRepository: Repository<StudentOrmEntity>,
    @InjectRepository(LevelOrmEntity)
    private readonly levelRepository: Repository<LevelOrmEntity>,
  ) {}

  private toEntity(studentOrm: StudentOrmEntity): StudentEntity {
    const { StudentId, FirstName, LastName, IdentityNumber, Gender, BirthDate, Address, Phone, GuardianName, GuardianPhone, Level, Course, Section, CreatedAt, UpdatedAt, DeletedAt } = studentOrm;
    return new StudentEntity(
      StudentId,
      FirstName,
      LastName,
      IdentityNumber,
      Gender,
      BirthDate,
      Address,
      Phone,
      GuardianName,
      GuardianPhone,
      Level,
      Course,
      Section,
      CreatedAt,
      UpdatedAt,
      DeletedAt
    );
  }
  async create(student: Omit<StudentEntity, 'StudentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>): Promise<StudentEntity> {
    const level = await this.levelRepository.findOne({ where: { LevelId: student.Level } });
    if (!level) {
      throw new BadRequestException(`Level with ID ${student.Level} does not exist.`);
    }

    const studentOrm = this.studentRepository.create(student);
    const savedStudent = await this.studentRepository.save(studentOrm);
    return this.toEntity(savedStudent);
  }

  async findAll(): Promise<StudentEntity[]> {
    const students = await this.studentRepository.find();
    return students.map(this.toEntity);
  }

  async findById(id: number): Promise<StudentEntity | null> {
    const student = await this.studentRepository.findOne({ where: { StudentId: id } });
    if (!student) {
      return null;
    }
    return this.toEntity(student);
  }

  async update(id: number, student: Partial<Omit<StudentEntity, 'StudentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<StudentEntity> {
    const existingStudent = await this.studentRepository.findOne({ where: { StudentId: id } });
    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }

    if (student.Level) {
      const level = await this.levelRepository.findOne({ where: { LevelId: student.Level } });
      if (!level) {
        throw new BadRequestException(`Level with ID ${student.Level} does not exist.`);
      }
    }

    const updatedStudent = { ...existingStudent, ...student, UpdatedAt: new Date() };
    await this.studentRepository.save(updatedStudent);
    return this.toEntity(updatedStudent);
  }

  async delete(id: number, student: Partial<Omit<StudentEntity, 'StudentId' | 'FirstName' | 'LastName' | 'IdentityNumber' | 'CreatedAt' | 'UpdatedAt' >>): Promise<void> {
    const existingStudent = await this.studentRepository.findOne({ where: { StudentId: id } });
    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }

    const updatedStudent = { ...existingStudent, ...student, DeletedAt: new Date() };
    await this.studentRepository.save(updatedStudent);
  }
} 