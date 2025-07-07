import { Role } from '../entities/role.entity';
import { CreateRoleDto } from '../../application/dtos/role.dto';

export interface RoleRepositoryInterface {
  create(createRoleDto: CreateRoleDto): Promise<Role>;
  findAll(): Promise<Role[]>;
  findOne(id: number): Promise<Role | null>;
  update(id: number, updateRoleDto: CreateRoleDto): Promise<Role>;
  delete(id: number): Promise<void>;
}
