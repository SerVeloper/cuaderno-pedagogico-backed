import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateDepartmentUseCase } from './application/use-cases/create-department.use-case';
import { DepartmentRepository } from './infraestructure/repositories/department.repository';
import { DepartmentController } from './infraestructure/controllers/department.controller';
import { FindAllDepartmentsUseCase } from './application/use-cases/find-all-departments.use-case';
import { FindByIdDepartmentUseCase } from './application/use-cases/find-by-id-department.use-case';
import { UpdateDepartmentUseCase } from './application/use-cases/update-department.use-case';
import { DeleteDepartmentUseCase } from './application/use-cases/delete-department.use-case';
import { DepartmentService } from './application/services/department.service';
import { DepartmentOrmEntity } from './infraestructure/repositories/department.orm.entity';
@Module({
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    { provide: 'DepartmentsRepositoryInterface', useClass: DepartmentRepository },
    { provide: 'CreateDepartmentUseCase', useClass: CreateDepartmentUseCase },
    { provide: 'FindAllDepartmentsUseCase', useClass: FindAllDepartmentsUseCase },
    { provide: 'FindByIdDepartmentUseCase', useClass: FindByIdDepartmentUseCase },
    { provide: 'UpdateDepartmentUseCase', useClass: UpdateDepartmentUseCase },
    { provide: 'DeleteDepartmentUseCase', useClass: DeleteDepartmentUseCase },
  ],
  imports: [
    TypeOrmModule.forFeature([DepartmentOrmEntity])
  ],
  exports: [DepartmentService]
})
export class DepartmentModule {}