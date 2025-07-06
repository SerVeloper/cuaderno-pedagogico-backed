import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './infrastructure/controllers/role.controller';
import { RoleService } from './application/services/role.service';
import { RoleRepository } from './infrastructure/repositories/role.repository';
import { Role } from './domain/entities/role.entity';
import { Permission } from '../permissions/domain/entities/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  controllers: [RoleController],
  providers: [
    RoleService,
    { provide: 'RoleRepositoryInterface', useClass: RoleRepository },
  ],
})
export class RoleModule {}
