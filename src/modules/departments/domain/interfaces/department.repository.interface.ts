import { DepartmentEntity } from '../entities/department.entity';
export interface DepartmentsRepositoryInterface {
  create(department: Omit<DepartmentEntity, 'DepartmentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>): Promise<DepartmentEntity>;
  findAll(): Promise<DepartmentEntity[]>;
  findById(id: number): Promise<DepartmentEntity | null>;
  update(id: number, department: Partial<Omit<DepartmentEntity, 'DepartmentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<DepartmentEntity>;
  delete(id: number, department: Partial<Omit<DepartmentEntity, 'DepartmentId' | 'Name' | 'Description' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<void>;
}

//export const DEPARTMENTS_REPOSITORY_TOKEN = Symbol('DEPARTMENTS_REPOSITORY');
