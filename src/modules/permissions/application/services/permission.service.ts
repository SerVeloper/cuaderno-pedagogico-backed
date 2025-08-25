import { Injectable, Inject } from '@nestjs/common';
import { PermissionRepositoryInterface } from '../../domain/interfaces/permission.repository.interface';
import { CreatePermissionDto } from '../dtos/permission.dto';
import { Permission } from '../../domain/entities/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @Inject('PermissionRepositoryInterface')
    private readonly permissionRepository: PermissionRepositoryInterface,
  ) {}

  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = new Permission();
    permission.PermissionName = createPermissionDto.PermissionName;
    permission.Description = createPermissionDto.Description || '';
    return this.permissionRepository.create(permission);
  }

  async findAll(): Promise<Permission[]> {
    return this.permissionRepository.findAll();
  }

  async findOne(id: number): Promise<Permission | null> {
    return this.permissionRepository.findOne(id);
  }

  async update(
    id: number,
    updatePermissionDto: CreatePermissionDto,
  ): Promise<Permission> {
    const permission = new Permission();
    permission.PermissionName = updatePermissionDto.PermissionName;
    permission.Description = updatePermissionDto.Description || '';
    return this.permissionRepository.update(id, permission);
  }

  async delete(id: number): Promise<void> {
    return this.permissionRepository.delete(id);
  }
}