import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './infrastructure/controllers/role.controller';
import { CreateRoleUseCase } from './application/use-cases/create-role.use-case';
import { FindAllRoleUseCase } from './application/use-cases/find-all-role.use-case';
import { UpdateRoleUseCase } from './application/use-cases/update-role.use-case';
import { FindByIdRoleUseCase } from './application/use-cases/find-by-id-role.use-case';
import { DeleteRoleUseCase } from './application/use-cases/delete-role.use-case';
import  { RoleOrmEntity } from './infrastructure/repositories/role.orm.entity';
import { RoleRepository } from './infrastructure/repositories/role.repository';
import { RoleService } from './application/services/role.service';


@Module({
  imports: [TypeOrmModule.forFeature([RoleOrmEntity])],
  controllers: [RoleController],
  providers: [
    RoleService,
    {
      provide: 'RoleRepositoryInterface',
      useClass: RoleRepository,
    },
    {
      provide: 'CreateRoleUseCase',
      useClass: CreateRoleUseCase,
    },
    {
      provide: 'FindAllRoleUseCase',
      useClass: FindAllRoleUseCase,
    },
    {
      provide: 'FindByIdRoleUseCase',
      useClass: FindByIdRoleUseCase,
    },
    {
      provide: 'UpdateRoleUseCase',
      useClass: UpdateRoleUseCase,
    },
    {
      provide: 'DeleteRoleUseCase',
      useClass: DeleteRoleUseCase,
    },
  ],
})
export class RoleModule {}