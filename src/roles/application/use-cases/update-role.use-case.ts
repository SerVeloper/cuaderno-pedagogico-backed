import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { RoleRepositoryInterface } from '../../domain/interfaces/role.repository.interface';
import { Role } from '../../domain/entities/role.entity';
import { UpdateRoleDto } from '../dtos/update-role.dto';

@Injectable()
export class UpdateRoleUseCase {  
  constructor (
    @Inject('RoleRepositoryInterface')
    private readonly roleRepository: RoleRepositoryInterface
  ){} 
  async execute({ id, updateRoleDto }: { id: number; updateRoleDto: UpdateRoleDto }): Promise<Role> {
    try{
      const existingRole = await this.roleRepository.findOne(id);
      if(!existingRole) {
          throw new NotFoundException(`Role with ID ${id} not found`);
        }
      const updatedRole = { ...existingRole, ...updateRoleDto };
    updatedRole.UpdatedAt = new Date();
    const result = await this.roleRepository.update(id, updatedRole);
    if(!result) {
      throw new BadRequestException(`Failed to update role with ID ${id}`);
    }
    return result;
    } catch (error) {
      throw new BadRequestException(`Failed to update role: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}