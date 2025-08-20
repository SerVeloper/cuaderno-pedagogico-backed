import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateLevelUseCase } from './application/use-cases/create-level.use-case';
import { FindAllLevelsUseCase } from './application/use-cases/find-all-levels.use-case';
import { FindByIdLevelUseCase } from './application/use-cases/find-by-id-level.use-case';
import { UpdateLevelUseCase } from './application/use-cases/update-level.use-case';
import { DeleteLevelUseCase } from './application/use-cases/delete-level.use-case';

import { LevelService } from './application/services/level.service';
import { LevelRepository } from './infrastructure/repositories/level.repository';
import { LevelOrmEntity } from './infrastructure/repositories/level.orm.entity';
import { LevelController } from './infrastructure/controllers/level.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LevelOrmEntity])],
  controllers: [LevelController],
  providers: [
    LevelService,
    {
      provide: 'LevelRepositoryInterface',
      useClass: LevelRepository
    },
    CreateLevelUseCase,
    FindAllLevelsUseCase,
    FindByIdLevelUseCase,
    UpdateLevelUseCase,
    DeleteLevelUseCase
  ],
  exports: [LevelService, 'LevelRepositoryInterface']
})
export class LevelModule {}
