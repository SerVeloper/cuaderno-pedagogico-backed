import { DepartmentEntity } from '../entities/department.entity';
export interface DepartmentsRepositoryInterface {
  create(department: Omit<DepartmentEntity, 'DepartmentID' | 'CreatedAt' | 'UpdatedAt'>): Promise<DepartmentEntity>;
  findAll(): Promise<DepartmentEntity[]>;
  findById(id: number): Promise<DepartmentEntity | null>;
  update(id: number, department: DepartmentEntity): Promise<DepartmentEntity>;
  delete(id: number): Promise<void>;
}

//export const DEPARTMENTS_REPOSITORY_TOKEN = Symbol('DEPARTMENTS_REPOSITORY');
