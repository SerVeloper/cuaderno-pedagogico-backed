import { Inject, Injectable } from '@nestjs/common';
import { UserRoleRepositoryInterface } from '../../domain/interfaces/user-role.interface';
import { UserRole } from '../../domain/entities/user-roles.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @Inject('UserRoleRepositoryInterface')
    private readonly userRoleRepository: UserRoleRepositoryInterface,
  ) {}

  async createUserRole(userRole: UserRole): Promise<UserRole> {
    return this.userRoleRepository.create(userRole);
  }

  async findAllUserRoles(): Promise<UserRole[]> {
    return this.userRoleRepository.findAll();
  }
  async findOneUserRole(id: number): Promise<UserRole | null> {
    return this.userRoleRepository.findOne(id);
  }  

  async updateUserRole(id: number, userRole: UserRole): Promise<UserRole> {
    return this.userRoleRepository.update(id, userRole);
  }

  async deleteUserRole(id: number): Promise<void> {
    return this.userRoleRepository.delete(id);
  }
}
