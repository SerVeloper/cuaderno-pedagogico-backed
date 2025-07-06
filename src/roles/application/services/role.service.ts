import { Injectable, Inject } from "@nestjs/common";
import { RoleRepositoryInterface } from "../../domain/interfaces/role.repository.interface";
import { CreateRoleDto } from "../dtos/role.dto";
import { Role } from "../../domain/entities/role.entity";

@Injectable()
export class RoleService {
  constructor(
    @Inject("RoleRepositoryInterface")
    private readonly roleRepository: RoleRepositoryInterface
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleRepository.create(createRoleDto);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }

  async findOne(id: number): Promise<Role | null> {
    return this.roleRepository.findOne(id);
  }

  async update(id: number, updateRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleRepository.update(id, updateRoleDto);
  }

  async delete(id: number): Promise<void> {
    return this.roleRepository.delete(id);
  }
}