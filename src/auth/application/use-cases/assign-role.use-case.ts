import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryInterface } from '../../domain/interfaces/user.repository.interface';
// import { RoleRepositoryInterface } from '../../../roles/domain/interfaces/role.repository.interface';
import { AssignRoleDto } from '../dtos/assign-role.dto';

@Injectable()
export class AssignRoleUseCase {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly users: UserRepositoryInterface,
    // @Inject('RoleRepositoryInterface')
    // private readonly roles: RoleRepositoryInterface,

  ) {}

  async execute(dto: AssignRoleDto): Promise<void> {
    const user = await this.users.findById(dto.userId);
    if (!user) throw new Error('User not found');

    // const role = await this.roles.findOne(dto.roleId);
    // if (!role) throw new Error('Role not found');

    await this.users.assignRole(dto.userId, dto.roleId);
  }
}