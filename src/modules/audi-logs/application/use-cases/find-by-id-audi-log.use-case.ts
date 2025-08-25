import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import {IAudiLogRepositoryInterface} from '../../domain/interfaces/audi-log.interface';
import { AudiLog } from '../../domain/entities/audi-log.entity';

@Injectable()
export class FindByIdAudiLogUseCase {
  constructor(
    @Inject('IAudiLogRepositoryInterface')
    private readonly actionsRepository: IAudiLogRepositoryInterface,
  ) {}

  async execute(id: number): Promise<AudiLog> {
    try {
      const audiLog = await this.actionsRepository.findById(id);
      if (!audiLog) {
        throw new NotFoundException(`Audi log with ID ${id} not found`);
      }
      return audiLog;
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve audi log: ${error.message}`);
    }
  }
}