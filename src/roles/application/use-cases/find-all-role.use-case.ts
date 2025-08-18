import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { RoleRepositoryInterface } from '../../domain/interfaces/role.repository.interface';
import { Role } from '../../domain/entities/role.entity';

@Injectable()
export class FindAllRoleUseCase {
  constructor(
    @Inject('RoleRepositoryInterface')
    private readonly roleRepository: RoleRepositoryInterface,
  ) {}

  async execute(): Promise<Role[]> {
    try {
      return await this.roleRepository.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve roles: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}