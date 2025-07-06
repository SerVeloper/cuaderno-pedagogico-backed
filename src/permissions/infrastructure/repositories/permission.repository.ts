import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Permission } from "../../domain/entities/permission.entity";
import { PermissionRepositoryInterface } from "../../domain/interfaces/permission.repository.interface";
import { CreatePermissionDto } from "../../application/dtos/permission.dto";

@Injectable()
export class PermissionRepository implements PermissionRepositoryInterface {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ) {}

  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = this.permissionRepository.create(createPermissionDto);
    return this.permissionRepository.save(permission);
  }

  async findAll(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }

  async findOne(id: number): Promise<Permission | null> {
    const permission = await this.permissionRepository.findOne({ where: { PermissionID: id } });
    if (!permission) throw new NotFoundException("Permission not found");
    return permission;
  }

  async update(id: number, updatePermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = await this.findOne(id);
    permission!.PermissionName = updatePermissionDto.PermissionName;
    permission!.Description = updatePermissionDto.Description ?? "";
    return this.permissionRepository.save(permission!);
  }

  async delete(id: number): Promise<void> {
    const permission = await this.findOne(id);
    await this.permissionRepository.remove(permission!);
  }
}