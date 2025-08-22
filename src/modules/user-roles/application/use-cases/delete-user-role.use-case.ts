import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRoleService } from '../services/user-role.service';

@Injectable()
export class DeleteUserRoleUseCase {
  constructor(private readonly userRoleService: UserRoleService) {}

  async execute(id: number): Promise<void> {
    const userRole = await this.userRoleService.findOneUserRole(id);
    if (!userRole) {
      throw new NotFoundException(`UserRole with ID ${id} not found`);
    }
    await this.userRoleService.deleteUserRole(id);
  }
}