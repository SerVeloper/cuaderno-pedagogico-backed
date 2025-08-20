import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateSubjectUseCase } from './application/use-cases/create-subject.use-case';
import { DeleteSubjectUseCase } from './application/use-cases/delete-subject.use-case';
import { FindAllSubjectsUseCase } from './application/use-cases/find-all-subject.use-case';
import { FindByIdSubjectUseCase } from './application/use-cases/find-by-id-subject.use-case';
import { UpdateSubjectUseCase } from './application/use-cases/update-subject.use-case';
import { SubjectController } from './infrastructure/controllers/subject.controller';
import { SubjectOrmEntity } from './infrastructure/repositories/subject.orm.entity';
import { SubjectRepository } from './infrastructure/repositories/subject.repository';

@Module({
  controllers: [SubjectController],
  providers: [
    {
      provide: 'SubjectRepositoryInterface',
      useClass: SubjectRepository,
    },
    {
      provide: 'CreateSubjectUseCase',
      useClass: CreateSubjectUseCase,
    },
    {
      provide: 'UpdateSubjectUseCase',
      useClass: UpdateSubjectUseCase,
    },
    {
      provide: 'FindAllSubjectsUseCase',
      useClass: FindAllSubjectsUseCase,
    },
    {
      provide: 'FindByIdSubjectUseCase',
      useClass: FindByIdSubjectUseCase,
    },
    {
      provide: 'DeleteSubjectUseCase',
      useClass: DeleteSubjectUseCase,
    },
  ],
  imports: [
    TypeOrmModule.forFeature([SubjectOrmEntity])
  ],
  exports: [
    'SubjectRepositoryInterface', 
  ]
})
export class SubjectModule {}