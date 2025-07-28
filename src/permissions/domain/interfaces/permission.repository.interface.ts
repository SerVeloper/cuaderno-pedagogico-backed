import { Permission } from '../entities/permission.entity';

export interface PermissionRepositoryInterface {
  create(permission: Permission): Promise<Permission>;
  findAll(): Promise<Permission[]>;
  findOne(id: number): Promise<Permission | null>;
  update(id: number, permission: Permission): Promise<Permission>;
  delete(id: number): Promise<void>;
}