import { Injectable } from '@nestjs/common';
import { PeriodService } from '../services/period.service';
import { Period } from '../../domain/entities/period.entity';
import { CreatePeriodDto } from '../dtos/create-period.dto';

@Injectable()
export class CreatePeriodUseCase {
  constructor (
    private readonly periodService: PeriodService 

  ){}
async execute(createPeriodDto: CreatePeriodDto): Promise<Period> {
    const period = new Period(
      0, 
      createPeriodDto.name,
      createPeriodDto.startDate,
      createPeriodDto.endDate,
      createPeriodDto.year,
      new Date() 
    );
    return this.periodService.create(period);
  }
}