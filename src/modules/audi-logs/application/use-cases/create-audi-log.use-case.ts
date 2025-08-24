import { IAudiLogRepositoryInterface } from '../../domain/interfaces/audi-log.interface';
import { AudiLog } from '../../domain/entities/audi-log.entity';
import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateAudiLogDto } from '../dtos/create-audi-log.dto';

@Injectable()
export class CreateAudiLogUseCase {
  constructor(
    @Inject('IAudiLogRepositoryInterface')
    private readonly audiLogRepository: IAudiLogRepositoryInterface,
  ) {}

  async execute(createAudiLogDto: CreateAudiLogDto): Promise<AudiLog> {
  const newAudiLog: AudiLog = {
      AudiLogID: 0,
      UserID:createAudiLogDto.UserID,
      Action: createAudiLogDto.Action,
      Details: createAudiLogDto.Details ?? '',
      IPAddress: createAudiLogDto.IPAddress ?? '',
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      DeletedAt: null,
    };

    try {
      return await this.audiLogRepository.create(newAudiLog);
    } catch (error) {
      throw new BadRequestException(`Failed to create audi log: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}