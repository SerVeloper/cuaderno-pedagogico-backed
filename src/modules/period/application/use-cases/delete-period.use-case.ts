import { Injectable,NotFoundException } from '@nestjs/common';
import { PeriodService } from '../services/period.service';

@Injectable()
export class DeletePeriodUseCase {
  constructor(private readonly periodService: PeriodService) {}

  async execute(id: number): Promise<void> {
    const period = await this.periodService.findById(id);
    if (!period) {
      throw new NotFoundException(`Period with ID ${id} not found`);
    }
    await this.periodService.delete(id);
  }
}
