import {Injectable} from '@nestjs/common';
import {UserRoleService} from '../services/user-role.service';
import {UserRole} from '../../domain/entities/user-roles.entity';
import {CreateUserRoleDTO} from '../dtos/create-user-role.dto'; 

@Injectable()
export class CreateUserRoleUseCase {
  constructor(private readonly userRoleService: UserRoleService) {}

  async execute(createUserRoleDto: CreateUserRoleDTO): Promise<UserRole> {
    const userRole = new UserRole(
      0, 
      createUserRoleDto.UserID,
      createUserRoleDto.RoleID,
      new Date(),
    );
    return this.userRoleService.createUserRole(userRole);
  }
}