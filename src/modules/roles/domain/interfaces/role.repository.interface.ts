import { Role } from '../entities/role.entity';

export interface RoleRepositoryInterface {
  create(createRole: Role): Promise<Role>;
  findAll(): Promise<Role[]>;
  findOne(id: number): Promise<Role | null>;
  update(id: number, updateRole: Role): Promise<Role>;
  delete(id: number): Promise<boolean>;
}
