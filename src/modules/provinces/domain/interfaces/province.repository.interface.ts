import { ProvinceEntity } from '../entities/province.entity';

export interface ProvincesRepositoryInterface {
  create(province: Omit<ProvinceEntity, 'ProvinceId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>): Promise<ProvinceEntity>;
  findAll(): Promise<ProvinceEntity[]>;
  findById(id: number): Promise<ProvinceEntity | null>;
  update(id: number, province: Partial<Omit<ProvinceEntity, 'ProvinceId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<ProvinceEntity>;
  delete(id: number, province: Partial<Omit<ProvinceEntity, 'ProvinceId' | 'Name' | 'Description' | 'DepartmentId' | 'CreatedAt' | 'UpdatedAt' | 'DeletedAt'>>): Promise<void>;
  findByDepartmentId(departmentId: number): Promise<ProvinceEntity[]>;
}
