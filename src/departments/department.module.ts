import { Module } from '@nestjs/common';
import { CreateDepartmentUseCase } from './application/use-cases/create-department.use-case';
import { DepartmentRepository } from './infraestructure/repositories/department.repository';
import { FindAllDepartmentsUseCase } from './application/use-cases/find-all-departments.use-case';
import { FindOneDepartmentUseCase } from './application/use-cases/find-one-department.use-case';
import { UpdateDepartmentUseCase } from './application/use-cases/update-department.use-case';
import { DeleteDepartmentUseCase } from './application/use-cases/delete-department.use-case';
import { DepartmentService } from './application/services/department.service';
import { DepartmentOrmEntity } from './infraestructure/repositories/department.orm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './infraestructure/controllers/department.controller';
@Module(
  {
    imports: [TypeOrmModule.forFeature([DepartmentOrmEntity])],
    controllers: [DepartmentController],
    providers: [
      DepartmentService,
      {
        provide: 'DepartmentsRepositoryInterface',
        useClass: DepartmentRepository
      },
      CreateDepartmentUseCase,
      FindAllDepartmentsUseCase,
      FindOneDepartmentUseCase,
      UpdateDepartmentUseCase,
      DeleteDepartmentUseCase
    ],
  })
export class DepartmentModule{}