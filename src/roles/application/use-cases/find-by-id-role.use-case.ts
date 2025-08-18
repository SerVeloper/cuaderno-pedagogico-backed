import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { RoleRepositoryInterface } from '../../domain/interfaces/role.repository.interface';
import { Role } from '../../domain/entities/role.entity';

@Injectable()
export class FindByIdRoleUseCase {
  constructor(
    @Inject('RoleRepositoryInterface')
    private readonly roleRepository: RoleRepositoryInterface,
  ) {}

  async execute(id: number): Promise<Role> {
    try {
      const role = await this.roleRepository.findOne(id);
   
      if (!role) {
        throw new NotFoundException(`Role with ID ${id} not found`);
      }
      return role;
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve role: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}