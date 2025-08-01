import { Injectable,NotFoundException} from '@nestjs/common';
import { UserRoleService } from '../services/user-role.service';
import { UserRole } from '../../domain/entities/user-roles.entity';
import { UpdateUserRoleDto } from '../dtos/update-user-role.dto'; 

@Injectable()
export class UpdateUserRoleUseCase {
  constructor(private readonly userRoleService: UserRoleService) {}

  async execute(id: number, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole> {
    const userRole = await this.userRoleService.findOneUserRole(id);
    if (!userRole) {
      throw new NotFoundException(`UserRole with ID ${id} not found`);
    }
    
    const updatedUserRole = { ...userRole, ...updateUserRoleDto };
    return this.userRoleService.updateUserRole(id, updatedUserRole);
  }
}