import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from './infrastructure/controllers/permission.controller';
import { PermissionService } from './application/services/permission.service';
import { PermissionRepository } from './infrastructure/repositories/permission.repository';
import { Permission } from './domain/entities/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  controllers: [PermissionController],
  providers: [
    PermissionService,
    {
      provide: 'PermissionRepositoryInterface',
      useClass: PermissionRepository,
    },
  ],
})
export class PermissionModule {}
