import { Department } from '../entities/department.entity';
import { CreateDepartmentDto } from '../../application/dtos/department.dto';

export interface DepartmentRepositoryInterface {
  create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
  findAll(): Promise<Department[]>;
  findOne(id: number): Promise<Department | null>;
  update(
    id: number,
    updateDepartmentDto: CreateDepartmentDto,
  ): Promise<Department>;
  delete(id: number): Promise<void>;
}
