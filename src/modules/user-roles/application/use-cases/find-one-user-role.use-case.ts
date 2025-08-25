import { Injectable, NotFoundException} from '@nestjs/common';
import { UserRoleService } from '../services/user-role.service';
import { UserRole } from '../../domain/entities/user-roles.entity'; 

@Injectable()
export class FindOneUserRoleUseCase {
  constructor(private readonly userRoleService: UserRoleService) {}

  async execute(id: number): Promise<UserRole | null> {
    const userRole = await this.userRoleService.findOneUserRole(id)
    if (!userRole){
      throw new NotFoundException(` User role with ID ${id} not found `)
    }
    return userRole;
  }
}