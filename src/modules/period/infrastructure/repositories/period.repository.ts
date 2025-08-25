import { Injectable, NotFoundException } from '@nestjs/common';
import { PeriodRepositoryInterface } from '../../domain/interfaces/period.repository.interface';
import { Period } from '../../domain/entities/period.entity';
import { PeriodEntity } from './period.orm.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class PeriodRepository implements PeriodRepositoryInterface {
  constructor(
    @InjectRepository(PeriodEntity)
    private readonly repository: Repository<PeriodEntity>,
  ) {}

  private toOrmEntity(domain: Partial<Period>): Partial<PeriodEntity> {
    return {
      PeriodID: domain.periodID,
      Name: domain.name,
      StartDate: domain.startDate,
      EndDate: domain.endDate,
      Year: domain.year,
      CreatedAt: domain.createdAt,
    };
  }

  private toDomainEntity(entity: PeriodEntity): Period {
    return new Period(
      entity.PeriodID,
      entity.Name,
      entity.StartDate,
      entity.EndDate,
      entity.Year,
      entity.CreatedAt,
    );
  }

  async create(period: Period): Promise<Period> {
    const entity = this.toOrmEntity(period);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<Period[]> {
    const entities = await this.repository.find();
    return entities.map(this.toDomainEntity);
  }

  async findById(id: number): Promise<Period | null> {
    const entity = await this.repository.findOne({ where: { PeriodID: id } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, period: Period): Promise<Period> {
    await this.repository.update(id, this.toOrmEntity(period));
    const updatedEntity = await this.repository.findOne({ where: { PeriodID: id } });
    if (!updatedEntity) {
      throw new NotFoundException(`Period with ID ${id} not found`);
    }
    return this.toDomainEntity(updatedEntity);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Period with ID ${id} not found`);
    }
  }
}