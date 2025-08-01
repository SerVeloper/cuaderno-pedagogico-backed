import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodEntity } from './infrastructure/repositories/period.orm.entity';
import { PeriodController } from './infrastructure/controllers/period.controller';
import { PeriodService } from './application/services/period.service';
import { PeriodRepository } from './infrastructure/repositories/period.repository';
import { CreatePeriodUseCase } from './application/use-cases/create-period.use-case';
import { FindAllPeriodUseCase } from './application/use-cases/find-all-period.use-case';
import { FindByIDPeriodUseCase } from './application/use-cases/find-by-id-period.use-case';
import { UpdatePeriodUseCase } from './application/use-cases/update-period.use-case';
import { DeletePeriodUseCase } from './application/use-cases/delete-period.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodEntity])],
  controllers: [PeriodController],
  providers: [
    PeriodService,
    {
      provide: 'PeriodRepositoryInterface',
      useClass: PeriodRepository,
    },
    CreatePeriodUseCase,
    FindAllPeriodUseCase,
    FindByIDPeriodUseCase,
    UpdatePeriodUseCase,
    DeletePeriodUseCase,
  ],
})
export class PeriodModule {}