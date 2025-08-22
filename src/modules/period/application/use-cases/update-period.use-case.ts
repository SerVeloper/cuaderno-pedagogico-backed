import { Injectable, NotFoundException } from '@nestjs/common';
import  { PeriodService } from '../services/period.service';
import { Period } from '../../domain/entities/period.entity';
import { UpdatePeriodDto } from '../dtos/update-period.dto';

@Injectable()
export class UpdatePeriodUseCase {
  constructor ( 
    private readonly periodService: PeriodService
  ){}

  async execute(id: number, perioddto: UpdatePeriodDto): Promise<Period> {
    const period = await this.periodService.findById(id);
    if ( !period) {
      throw new NotFoundException(`Period with ID ${id} not fount`)

    }
    const updatePeriod= { ...period, ...perioddto}
    return this.periodService.update(id, updatePeriod);
  }
}

