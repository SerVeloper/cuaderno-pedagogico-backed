import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './infraestructure/controllers/department.controller';
import { DepartmentService } from './application/services/department.service';
import { DepartmentRepository } from './infraestructure/repositories/department.repository';
import { Department } from './domain/entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    {
      provide: 'DepartmentRepositoryInterface',
      useClass: DepartmentRepository,
    },
  ],
})
export class DepartmentModule {}
