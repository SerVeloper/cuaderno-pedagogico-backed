import { Subject } from '../entities/subject.entity';

export interface SubjectRepositoryInterface {
  create(subject: Subject): Promise<Subject>;
  findById(id: number): Promise<Subject | null>;  
  findAll(): Promise<Subject[]>;
  update(id: number, subject: Partial<Subject>): Promise<Subject | null>;  
  delete(id: number): Promise<boolean>;
}
