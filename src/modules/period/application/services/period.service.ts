import { Injectable, Inject } from '@nestjs/common';
import { PeriodRepositoryInterface } from '../../domain/interfaces/period.repository.interface';
import { Period } from '../../domain/entities/period.entity';

@Injectable()
export class PeriodService {
  constructor(
    @Inject('PeriodRepositoryInterface')
    private readonly periodRepositoryInterface: PeriodRepositoryInterface,
  ) {}

  async create(period: Period): Promise<Period> {
    return this.periodRepositoryInterface.create(period);
  }

  async findAll(): Promise<Period[]> {
    return this.periodRepositoryInterface.findAll();
  }

  async findById(id: number): Promise<Period | null> {
    return this.periodRepositoryInterface.findById(id);
  }

  async update(id: number, period: Period): Promise<Period> {
    return this.periodRepositoryInterface.update(id, period);
  }

  async delete(id: number): Promise<void> {
    return this.periodRepositoryInterface.delete(id);
  }
}
