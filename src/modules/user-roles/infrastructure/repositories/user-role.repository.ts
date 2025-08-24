import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserRole } from '../../domain/entities/user-roles.entity';
import { UserRoleRepositoryInterface } from '../../domain/interfaces/user-role.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleEntity } from './user-role.orm.entity';

@Injectable()
export class UserRoleRepository implements UserRoleRepositoryInterface {
  constructor(
    @InjectRepository(UserRoleEntity)
    private readonly repository: Repository<UserRoleEntity>,
  ) {}

  private toOrmEntity(domain: Partial<UserRole>): Partial<UserRoleEntity> {
    return {
      UserRoleID: domain.UserRoleID,
      UserID: domain.UserID,
      RoleID: domain.RoleID,
      createdAt: domain.createdAt,
    };
  }

  private toDomainEntity(entity: UserRoleEntity): UserRole {
    return new UserRole(
      entity.UserRoleID,
      entity.UserID,
      entity.RoleID,
      entity.createdAt,
    );
  }

  async create(userRole: UserRole): Promise<UserRole> {
    const entity = this.toOrmEntity(userRole);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<UserRole[]> {
    const entities = await this.repository.find();
    return entities.map(this.toDomainEntity);
  }

  async findOne(id: number): Promise<UserRole | null> {
    const entity = await this.repository.findOne({
      where: { UserRoleID: id },
    });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, userRole: UserRole): Promise<UserRole> {
    await this.repository.update(id, this.toOrmEntity(userRole));
    const updatedEntity = await this.repository.findOne({
      where: { UserRoleID: id },
    });
    if (!updatedEntity) {
      throw new NotFoundException(`User role with ID ${id} not found`);
    }
    return this.toDomainEntity(updatedEntity);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User role with ID ${id} not found`);
    }
  }
}