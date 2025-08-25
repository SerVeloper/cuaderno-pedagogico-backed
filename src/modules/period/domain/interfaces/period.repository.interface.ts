import { Period } from '../entities/period.entity';

export interface PeriodRepositoryInterface {
  create(period: Period): Promise<Period>;
  findById(id: number): Promise<Period | null>;
  findAll(): Promise<Period[]>;
  update(id: number, period: Period): Promise<Period>;
  delete(id: number): Promise<void>;
}
