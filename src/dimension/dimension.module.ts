import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimensionController } from './infrastructure/controllers/dimension.controller';
import { DimensionService } from './application/services/dimension.service';
import { DimensionOrmEntity } from './infrastructure/repositories/dimension.orm.entity';
import { DimensionRepository } from './infrastructure/repositories/dimension.repository';
import { CreateDimensionUseCase } from './application/use-cases/create-dimension.use-case';
import { FindAllDimensionUseCase } from './application/use-cases/find-all-dimension.use-case';
import { FindByIdDimensionUseCase } from './application/use-cases/find-by-id-dimension.use-case';
import { UpdateDimensionUseCase } from './application/use-cases/update-dimension.use-case';
import { DeleteDimensionUseCase } from './application/use-cases/delete-dimension.use-case';

@Module({
  controllers: [DimensionController],
  providers: [
    DimensionService,
    {
      provide: 'DimensionRepositoryInterface',
      useClass: DimensionRepository,
    },
    {
      provide: 'CreateDimensionUseCase',
      useClass: CreateDimensionUseCase,
    },
    {
      provide: 'FindAllDimensionUseCase',
      useClass: FindAllDimensionUseCase,
    },
    {
      provide: 'FindByIdDimensionUseCase',
      useClass: FindByIdDimensionUseCase,
    },
    {
      provide: 'UpdateDimensionUseCase',
      useClass: UpdateDimensionUseCase,
    },
    {
      provide: 'DeleteDimensionUseCase',
      useClass: DeleteDimensionUseCase,
    },
  ],
  imports: [
    TypeOrmModule.forFeature([DimensionOrmEntity]),
  ],
})
export class DimensionModule {}
