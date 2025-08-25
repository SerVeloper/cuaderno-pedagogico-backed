import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../domain/entities/role.entity';
import { RoleOrmEntity } from './role.orm.entity';
import { RoleRepositoryInterface } from '../../domain/interfaces/role.repository.interface';

@Injectable()
export class RoleRepository implements RoleRepositoryInterface {
  constructor(
    @InjectRepository(RoleOrmEntity)
    private readonly roleRepository: Repository<RoleOrmEntity>,
  ) {}
  private toOrmEntity(role: Role): RoleOrmEntity {
    const ormEntity = new RoleOrmEntity();
    ormEntity.RoleID = role.RoleID;
    ormEntity.RoleName = role.RoleName;
    ormEntity.Description = role.Description;
    ormEntity.CreatedAt = role.CreatedAt;
    ormEntity.UpdatedAt = role.UpdatedAt;
    return ormEntity;
  }

  private toDomainEntity(ormEntity: RoleOrmEntity): Role {
    return {
      RoleID: ormEntity.RoleID,
      RoleName: ormEntity.RoleName,
      Description: ormEntity.Description,
      CreatedAt: ormEntity.CreatedAt,
      UpdatedAt: ormEntity.UpdatedAt,
      DeletedAt: ormEntity.DeletedAt,
    };
  }

  async create(role: Role): Promise<Role> {
    const roleEntity = this.toOrmEntity(role);
    const savedEntity = await this.roleRepository.save(roleEntity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<Role[]> {
    const roles = await this.roleRepository.find();
    return roles.map(this.toDomainEntity);
  }

  async findOne(id: number): Promise<Role | null> {
    const role = await this.roleRepository.findOne({ where: { RoleID: id } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
    return this.toDomainEntity(role);
  }

  async update(id: number, updateRole: Role): Promise<Role> {
    const existingRole = await this.findOne(id);
    if (!existingRole) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }

    const updatedRole = { ...existingRole, ...updateRole, UpdatedAt: new Date() };
    const ormEntity = this.toOrmEntity(updatedRole);
    const savedEntity = await this.roleRepository.save(ormEntity);
    return this.toDomainEntity(savedEntity);
  }

  async delete(id: number): Promise<boolean> {
    const role = await this.roleRepository.findOne({ where: { RoleID: id } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
    role.DeletedAt = new Date();
    await this.roleRepository.save(role);
    return true;
  }
}
