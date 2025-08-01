import { Injectable } from '@nestjs/common';
import { Period } from 'src/period/domain/entities/period.entity';  
import { PeriodService } from '../services/period.service';

@Injectable()
export class FindAllPeriodUseCase {
  constructor(private readonly periodService: PeriodService) {}

  async execute(): Promise<Period[]> {
    return this.periodService.findAll();
  }
}
