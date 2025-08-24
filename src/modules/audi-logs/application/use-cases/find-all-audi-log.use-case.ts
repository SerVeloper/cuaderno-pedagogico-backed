import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {IAudiLogRepositoryInterface} from '../../domain/interfaces/audi-log.interface';
import { AudiLog } from '../../domain/entities/audi-log.entity';
@Injectable()
export class FindAllAudiLogUseCase {
  constructor(
    @Inject('IAudiLogRepositoryInterface')
    private readonly actionsRepository: IAudiLogRepositoryInterface,
  ) {}

  async execute(): Promise<AudiLog[]> {
    try {
      return await this.actionsRepository.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to retrieve audi logs: ${error.message}`);
    }
  }
}