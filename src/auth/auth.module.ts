import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { UserOrm } from './infrastructure/repositories/user.orm.entity';
import { UserRoleEntity } from '../modules/user-roles/infrastructure/repositories/user-role.orm.entity';
import { RoleOrmEntity } from '../modules/roles/infrastructure/repositories/role.orm.entity';

import { UserRepository } from './infrastructure/repositories/user.repository';

import { BcryptHasher } from './infrastructure/services/bcrypt.hasher';
import { JwtTokenService } from './infrastructure/services/jwt.token-service';

import { RegisterUserUseCase } from './application/use-cases/register.use-case';
import { LoginUseCase } from './application/use-cases/login.use-case';
import { AssignRoleUseCase } from './application/use-cases/assign-role.use-case';

import { AuthController } from './infrastructure/controllers/auth.controller';

const USER_REPO = Symbol('USER_REPO');
const HASHER = Symbol('HASHER');
const TOKEN_SERVICE = Symbol('TOKEN_SERVICE');

@Module({
  imports: [
    TypeOrmModule.forFeature([UserOrm, UserRoleEntity, RoleOrmEntity]),
    JwtModule.register({
      global: false,
      secret: process.env.JWT_SECRET || 'dev-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    { provide: USER_REPO, useClass: UserRepository },
    { provide: HASHER, useClass: BcryptHasher },
    {
      provide: TOKEN_SERVICE,
      useFactory: (jwtService: JwtService) => new JwtTokenService(jwtService),
      inject: [JwtService], // Asegura que JwtService se inyecta
    },
    {
      provide: RegisterUserUseCase,
      useFactory: (repo: UserRepository, hasher: BcryptHasher) =>
        new RegisterUserUseCase(repo, hasher),
      inject: [USER_REPO, HASHER],
    },
    {
      provide: LoginUseCase,
      useFactory: (repo: UserRepository, hasher: BcryptHasher, token: JwtTokenService) =>
        new LoginUseCase(repo, hasher, token),
      inject: [USER_REPO, HASHER, TOKEN_SERVICE],
    },
    {
      provide: AssignRoleUseCase,
      useFactory: (repo: UserRepository) => new AssignRoleUseCase(repo),
      inject: [USER_REPO],
    },
  ],
  exports: [],
})
export class AuthModule {}