import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './infrastructure/controllers/student.controller';
import { StudentService } from './application/services/student.service';
import { StudentOrmEntity } from './infrastructure/repositories/student.orm.entity';
import { StudentRepository } from './infrastructure/repositories/student.repository';
import { LevelOrmEntity } from '../levels/infrastructure/repositories/level.orm.entity';
import { LevelRepository } from '../levels/infrastructure/repositories/level.repository';
import { CreateStudentUseCase } from './application/use-cases/create-student.use-case';
import { FindAllStudentUseCase } from './application/use-cases/find-all-student.use-case';
import { FindByIdStudentUseCase } from './application/use-cases/find-by-id-student.use-case';
import { UpdateStudentUseCase } from './application/use-cases/update-student.use-case';
import { DeleteStudentUseCase } from './application/use-cases/delete-student.use-case';

@Module({
  controllers: [StudentController],
  providers: [
    StudentService,
    { provide: 'CreateStudentUseCase', useClass: CreateStudentUseCase },
    { provide: 'FindAllStudentUseCase', useClass: FindAllStudentUseCase },
    { provide: 'FindByIdStudentUseCase', useClass: FindByIdStudentUseCase },
    { provide: 'UpdateStudentUseCase', useClass: UpdateStudentUseCase },
    { provide: 'DeleteStudentUseCase', useClass: DeleteStudentUseCase },
    { provide: 'StudentRepositoryInterface', useClass: StudentRepository },
    { provide: 'LevelRepositoryInterface', useClass: LevelRepository },
  ],
  imports: [
    TypeOrmModule.forFeature([StudentOrmEntity, LevelOrmEntity]),
  ],
  exports: [StudentService],
})
export class StudentModule {}