import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { RoleRepositoryInterface } from '../../domain/interfaces/role.repository.interface';
import { Role } from '../../domain/entities/role.entity';
import { CreateRoleDto } from '../dtos/create-role.dto';

@Injectable()
export class CreateRoleUseCase { 
  constructor (
    @Inject('RoleRepositoryInterface')
    private readonly roleRepository: RoleRepositoryInterface
  ){}

async execute({ createRoleDto }: { createRoleDto: CreateRoleDto }): Promise<Role> {
  const newRole: Role = {
    RoleID: 0,
    RoleName: createRoleDto.RoleName,
    Description: createRoleDto.Description ?? '',
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    DeletedAt: null,
    
  };

  try {
    return await this.roleRepository.create(newRole);
  } catch (error) {
    throw new BadRequestException(`Failed to create role: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

}