import { Injectable } from '@nestjs/common';
import { PeriodService } from '../services/period.service';
import { Period } from '../../domain/entities/period.entity';

@Injectable()
export class FindByIDPeriodUseCase {
  constructor(private readonly periodService: PeriodService) {}

  async execute(id: number): Promise<Period | null> {
    return this.periodService.findById(id);
  }
}
