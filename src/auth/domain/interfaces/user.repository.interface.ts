import { User } from '../entities/user.entity';
import { Role } from '../../../roles/domain/entities/role.entity';

export interface UserRepositoryInterface {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  create(user: User): Promise<User>;
  assignRole(userId: number, roleId: number): Promise<void>;  
  findRoleByName(name: string): Promise<Role | null>;

}