import { Injectable, Inject } from '@nestjs/common';
import { LevelEntity } from '../../domain/entities/level.entity';
import { CreateLevelDto } from '../dtos/create-level.dto';
import { UpdateLevelDto } from '../dtos/update-level.dto';
import { CreateLevelUseCase } from '../use-cases/create-level.use-case';
import { UpdateLevelUseCase } from '../use-cases/update-level.use-case';
import { DeleteLevelUseCase } from '../use-cases/delete-level.use-case';
import { FindAllLevelsUseCase } from '../use-cases/find-all-levels.use-case';
import { FindByIdLevelUseCase } from '../use-cases/find-by-id-level.use-case';

@Injectable()
export class LevelService {
  constructor(
    @Inject('CreateLevelUseCase')
    private readonly createLevelUseCase: CreateLevelUseCase,
    @Inject('UpdateLevelUseCase')
    private readonly updateLevelUseCase: UpdateLevelUseCase,
    @Inject('DeleteLevelUseCase')
    private readonly deleteLevelUseCase: DeleteLevelUseCase,
    @Inject('FindAllLevelsUseCase')
    private readonly findAllLevelsUseCase: FindAllLevelsUseCase,
    @Inject('FindByIdLevelUseCase')
    private readonly findByIdLevelUseCase: FindByIdLevelUseCase,
  ) {}

  async create(createLevelDto: CreateLevelDto): Promise<LevelEntity> {
    return this.createLevelUseCase.execute(createLevelDto);
  }

  async findAll(): Promise<LevelEntity[]> {
    return this.findAllLevelsUseCase.execute();
  }

  async findById(id: number): Promise<LevelEntity | null> {
    return this.findByIdLevelUseCase.execute(id);
  }

  async update(id: number, updateLevelDto: UpdateLevelDto): Promise<LevelEntity> {
    return this.updateLevelUseCase.execute(id, updateLevelDto);
  }

  async delete(id: number): Promise<void> {
    return this.deleteLevelUseCase.execute(id);
  }
}
