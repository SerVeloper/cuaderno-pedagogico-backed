import { UserRole } from '../entities/user-roles.entity';

export interface UserRoleRepositoryInterface {
  create(userRole: UserRole): Promise<UserRole>;
  findAll(): Promise<UserRole[]>;
  findOne(id: number): Promise<UserRole | null>;
  update(id: number, userRole: UserRole): Promise<UserRole>;
  delete(id: number): Promise<void>;
}
