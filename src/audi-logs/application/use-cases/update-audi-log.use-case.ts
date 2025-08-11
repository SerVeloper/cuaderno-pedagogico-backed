import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import {IAudiLogRepositoryInterface} from '../../domain/interfaces/audi-log.interface';
import { AudiLog } from '../../domain/entities/audi-log.entity';
import { UpdateAudiLogDto } from '../dtos/update-audi-log.dto';

@Injectable()
export class UpdateAudiLogUseCase {
  constructor(
    @Inject('IAudiLogRepositoryInterface')
    private readonly actionsRepository: IAudiLogRepositoryInterface,
  ) {}

  async execute(id: number, updateAudiLogDto: UpdateAudiLogDto): Promise<AudiLog> {
    try {
      const audiLog = await this.actionsRepository.findById(id);
      if (!audiLog) {
        throw new NotFoundException(`Audi log with ID ${id} not found`);
      }
     const updatedAudiLog = {...audiLog, ...updateAudiLogDto}
      updatedAudiLog.UpdatedAt = new Date(); 

      const result = await this.actionsRepository.update(id, updatedAudiLog);
      if (!result) {
        throw new BadRequestException(`Failed to update audi log with ID ${id}`);
      }
      return result;
    } catch (error) {
      throw new BadRequestException(`Failed to update audi log: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  
  }
}

