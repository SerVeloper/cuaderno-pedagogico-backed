import { Injectable, Inject } from '@nestjs/common';
import { AudiLog } from '../../domain/entities/audi-log.entity';
import { CreateAudiLogDto } from '../dtos/create-audi-log.dto';
import { UpdateAudiLogDto } from '../dtos/update-audi-log.dto';
import { CreateAudiLogUseCase } from '../use-cases/create-audi-log.use-case';
import { FindAllAudiLogUseCase } from '../use-cases/find-all-audi-log.use-case';
import { UpdateAudiLogUseCase } from '../use-cases/update-audi-log.use-case';
import { FindByIdAudiLogUseCase } from '../use-cases/find-by-id-audi-log.use-case';
import { DeleteAudiLogUseCase } from '../use-cases/delete-audi-log.use-case';


@Injectable()
export class AudiLogService {
  constructor(
    @Inject('CreateAudiLogUseCase')
    private readonly createAudiLogUseCase: CreateAudiLogUseCase,
    @Inject('FindAllAudiLogUseCase')
    private readonly findAllAudiLogUseCase: FindAllAudiLogUseCase,
    @Inject('UpdateAudiLogUseCase')
    private readonly updateAudiLogUseCase: UpdateAudiLogUseCase,
    @Inject('FindByIdAudiLogUseCase')
    private readonly findByIdAudiLogUseCase: FindByIdAudiLogUseCase,
    @Inject('DeleteAudiLogUseCase')
    private readonly deleteAudiLogUseCase: DeleteAudiLogUseCase
    
  ) {}

  async createAudiLog(createAudiLogDto: CreateAudiLogDto): Promise<AudiLog> {
    return this.createAudiLogUseCase.execute(createAudiLogDto);
  }

  async findAllAudiLogs(): Promise<AudiLog[]> {
    return this.findAllAudiLogUseCase.execute();
  }


  async findAudiLogById(id: number): Promise<AudiLog> {
    return this.findByIdAudiLogUseCase.execute(id);
  }

  async updateAudiLog(id: number, updateAudiLogDto: UpdateAudiLogDto): Promise<AudiLog> {
    return this.updateAudiLogUseCase.execute(id, updateAudiLogDto);
  }
  async deleteAudiLog(id: number): Promise<boolean> {
    return this.deleteAudiLogUseCase.execute(id);
  }

}