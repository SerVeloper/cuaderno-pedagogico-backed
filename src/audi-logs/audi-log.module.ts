import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AudiLogController} from './infrastructure/controllers/audi-log.controller';
import {AudiLogService} from './application/services/audi-log.service';
import {AudiLogOrmEntity} from './infrastructure/repositories/audi-log.orm.entity';
import {AudiLogRepository} from './infrastructure/repositories/audi-log.repository';
import {CreateAudiLogUseCase} from './application/use-cases/create-audi-log.use-case';
import {FindAllAudiLogUseCase} from './application/use-cases/find-all-audi-log.use-case';
import {FindByIdAudiLogUseCase} from './application/use-cases/find-by-id-audi-log.use-case';
import {UpdateAudiLogUseCase} from './application/use-cases/update-audi-log.use-case';
import {DeleteAudiLogUseCase} from './application/use-cases/delete-audi-log.use-case';


@Module({
  controllers: [AudiLogController],
  providers: [
    AudiLogService,
    {
      provide: 'IAudiLogRepositoryInterface',
      useClass: AudiLogRepository,
    },
    {
      provide: 'CreateAudiLogUseCase',
      useClass: CreateAudiLogUseCase,
    },
    {
      provide: 'FindAllAudiLogUseCase',
      useClass: FindAllAudiLogUseCase,
    },
    {
      provide: 'FindByIdAudiLogUseCase',
      useClass: FindByIdAudiLogUseCase,
    },
    {
      provide: 'UpdateAudiLogUseCase',
      useClass: UpdateAudiLogUseCase,
    },
    {
      provide: 'DeleteAudiLogUseCase',
      useClass: DeleteAudiLogUseCase,
    }
  ],
  imports: [
    TypeOrmModule.forFeature([AudiLogOrmEntity]),
  ],
})
export class AudiLogModule {}
