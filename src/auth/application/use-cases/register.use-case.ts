import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { UserRepositoryInterface } from '../../domain/interfaces/user.repository.interface';
import { IPasswordHasher } from '../services/password-hasher';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly users: UserRepositoryInterface,
    @Inject('PasswordHasherInterface')
    private readonly hasher: IPasswordHasher,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const byUsername = await this.users.findByUsername(dto.userName);
    if (byUsername) throw new BadRequestException('Username already taken');

    const byEmail = await this.users.findByEmail(dto.email);
    if (byEmail) throw new BadRequestException('Email already registered');

    const hash = await this.hasher.hashPassword(dto.password);
    const user = new User(
      0,
      dto.userName,
      dto.email,
      hash,
      dto.fullName,
      dto.phone ?? null,
      new Date(),
      new Date(),
      true,
      [],
    );

    const created = await this.users.create(user);

    const defaultRole = await this.users.findRoleByName('user');
    if (defaultRole) {
      await this.users.assignRole(created.UserID, defaultRole.RoleID);
      created.roles.push(defaultRole);
    } else {
      console.warn('Default role "user" not found. User registered without role.');
    }

    return created;
  }
}