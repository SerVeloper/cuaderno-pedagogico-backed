import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Role } from "../../domain/entities/role.entity";
import { RoleRepositoryInterface } from "../../domain/interfaces/role.repository.interface";
import { CreateRoleDto } from "../../application/dtos/role.dto";
import { Permission } from "../../../permissions/domain/entities/permission.entity";

@Injectable()
export class RoleRepository implements RoleRepositoryInterface {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = this.roleRepository.create({
      RoleName: createRoleDto.RoleName,
      Description: createRoleDto.Description,
    });

    if (createRoleDto.permissionIds) {
      role.permissions = await this.permissionRepository.findByIds(createRoleDto.permissionIds);
    }

    return this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find({ relations: ["permissions"] });
  }

  async findOne(id: number): Promise<Role | null> {
    const role = await this.roleRepository.findOne({
      where: { RoleID: id },
      relations: ["permissions"],
    });
    if (!role) throw new NotFoundException("Role not found");
    return role;
  }

  async update(id: number, updateRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.findOne(id);
    if (!role) {
      throw new NotFoundException("Role not found");
    }
    role.RoleName = updateRoleDto.RoleName;
    role.Description = updateRoleDto.Description ?? "";

    if (updateRoleDto.permissionIds) {
      role.permissions = await this.permissionRepository.findByIds(updateRoleDto.permissionIds);
    }

    return this.roleRepository.save(role);
  }

  async delete(id: number): Promise<void> {
    const role = await this.findOne(id);
    await this.roleRepository.remove(role as Role);
  }
}