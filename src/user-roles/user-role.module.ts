import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleEntity } from './infrastructure/repositories/user-role.orm.entity';
import { UserRoleController } from './infrastructure/controllers/user-role.controller';
import { UserRoleService } from './application/services/user-role.service';
import { UserRoleRepository } from './infrastructure/repositories/user-role.repository';
import { CreateUserRoleUseCase } from './application/use-cases/create-user-role.use-case';
import { FindAllUserRoleUseCase } from './application/use-cases/find-all-user-role.use-case';
import { FindOneUserRoleUseCase } from './application/use-cases/find-one-user-role.use-case';
import { UpdateUserRoleUseCase } from './application/use-cases/update-user-role.use-case';
import { DeleteUserRoleUseCase } from './application/use-cases/delete-user-role.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity])],
  controllers: [UserRoleController],
  providers: [
    UserRoleService,
    {
      provide: 'UserRoleRepositoryInterface',
      useClass: UserRoleRepository,
    },
    CreateUserRoleUseCase,
    FindAllUserRoleUseCase,
    FindOneUserRoleUseCase,
    UpdateUserRoleUseCase,
    DeleteUserRoleUseCase,
  ],
})
export class UserRoleModule {}

