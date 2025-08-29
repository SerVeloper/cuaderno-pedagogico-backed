import { StudentEntity } from '../entities/student.entity';

export interface StudentRepositoryInterface {
  create(student: Omit<StudentEntity, 'StudentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>): Promise<StudentEntity>;
  findAll(): Promise<StudentEntity[]>;
  findById(id: number): Promise<StudentEntity | null>;
  update(id: number, student: Partial<Omit<StudentEntity, 'StudentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<StudentEntity>;
  delete(id: number, student: Partial<Omit<StudentEntity, 'StudentId' | 'FirstName' | 'LastName' | 'IdentityNumber' | 'CreatedAt' | 'UpdatedAt' >>): Promise<void>; 
}