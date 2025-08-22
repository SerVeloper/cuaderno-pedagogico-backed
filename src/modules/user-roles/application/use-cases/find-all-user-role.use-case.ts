import {Injectable} from '@nestjs/common';
import {UserRoleService} from '../services/user-role.service';
import {UserRole} from '../../domain/entities/user-roles.entity';

@Injectable()
export class FindAllUserRoleUseCase {
  constructor(private readonly userRoleService: UserRoleService) {}

  async execute(): Promise<UserRole[]> {
    return this.userRoleService.findAllUserRoles();
  }
}