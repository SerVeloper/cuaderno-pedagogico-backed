import { ProvinceEntity } from '../entities/province.entity';

export interface ProvincesRepositoryInterface {
  create(province: Omit<ProvinceEntity, 'province_id' | 'created_at' | 'updated_at'>): Promise<ProvinceEntity>;
  findAll(): Promise<ProvinceEntity[]>;
  findById(id: number): Promise<ProvinceEntity | null>;
  update(id: number, province: Partial<Omit<ProvinceEntity, 'province_id' | 'created_at' | 'updated_at'>>): Promise<ProvinceEntity>;
  delete(id: number, province: Partial<Omit<ProvinceEntity, 'province_id' | 'name' | 'description' | 'department_id' | 'created_at' | 'updated_at'>>): Promise<void>;
}
