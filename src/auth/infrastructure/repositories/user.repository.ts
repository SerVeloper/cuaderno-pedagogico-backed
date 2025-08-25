import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOrm } from './user.orm.entity';
import { UserRepositoryInterface } from '../../domain/interfaces/user.repository.interface';
import { User } from '../../domain/entities/user.entity';
import { Role } from '../../../modules/roles/domain/entities/role.entity';
import { RoleOrmEntity } from '../../../modules/roles/infrastructure/repositories/role.orm.entity';
import { UserRoleEntity } from '../../../modules/user-roles/infrastructure/repositories/user-role.orm.entity';

function toDomain(e: UserOrm): User {
  return new User(
    e.id,
    e.username,
    e.email,
    e.passwordHash,
    e.fullName,
    e.phone,
    e.createdAt,
    e.updatedAt,
    e.isActive,
    e.userRoles ? e.userRoles.map(ur => new Role(
      ur.role.RoleID,
      ur.role.RoleName,
      ur.role.Description,
      ur.role.CreatedAt,
      ur.role.UpdatedAt,
      ur.role.DeletedAt,
    )) : [],
  );
}

function toOrm(u: User): UserOrm {
  const e = new UserOrm();
  if (u.UserID) e.id = u.UserID;
  e.username = u.UserName;
  e.email = u.Email;
  e.passwordHash = u.PasswordHash;
  e.fullName = u.FullName;
  e.phone = u.Phone;
  e.isActive = u.IsActive;
  return e;
}

export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserOrm)
    private readonly userRepo: Repository<UserOrm>,
    @InjectRepository(RoleOrmEntity)
    private readonly roleRepo: Repository<RoleOrmEntity>,
    @InjectRepository(UserRoleEntity)
    private readonly userRoleRepo: Repository<UserRoleEntity>,
  ) {}

  private async findWithRelations(where: any): Promise<User | null> {
    const e = await this.userRepo.findOne({
      where,
      relations: ['userRoles', 'userRoles.role'],
    });
    return e ? toDomain(e) : null;
  }

  async findById(id: number): Promise<User | null> {
    return this.findWithRelations({ id });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.findWithRelations({ username });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findWithRelations({ email });
  }

  async create(user: User): Promise<User> {
    const saved = await this.userRepo.save(toOrm(user));
    return toDomain(saved);
  }

  async assignRole(userId: number, roleId: number): Promise<void> {
    const existing = await this.userRoleRepo.findOne({ where: { UserID: userId, RoleID: roleId } });
    if (existing) return;  // Evita duplicados

    const newUserRole = this.userRoleRepo.create({
      UserID: userId,
      RoleID: roleId,
      createdAt: new Date(),
    });
    await this.userRoleRepo.save(newUserRole);
  }

  async findRoleByName(name: string): Promise<Role | null> {
    const e = await this.roleRepo.findOne({ where: { RoleName: name } });
    return e
      ? new Role(
          e.RoleID,
          e.RoleName,
          e.Description,
          e.CreatedAt,
          e.UpdatedAt,
          e.DeletedAt,
        )
      : null;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepo.find({ relations: ['userRoles', 'userRoles.role'] });
    return users.map(toDomain);
  }
}