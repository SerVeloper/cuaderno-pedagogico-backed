import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AudiLogOrmEntity } from './audi-log.orm.entity';
import { IAudiLogRepositoryInterface } from '../../domain/interfaces/audi-log.interface';
import { AudiLog } from '../../domain/entities/audi-log.entity';

@Injectable()
export class AudiLogRepository implements IAudiLogRepositoryInterface {
  constructor(
    @InjectRepository(AudiLogOrmEntity)
    private readonly audiLogRepository: Repository<AudiLogOrmEntity>,
  ) {}


  private toOrmEntity(domain: AudiLog): AudiLogOrmEntity {
    const ormEntity = new AudiLogOrmEntity();
    ormEntity.AudiLogID = domain.AudiLogID;
    ormEntity.UserID = domain.UserID;
    ormEntity.Action = domain.Action;
    ormEntity.Details = domain.Details;
    ormEntity.IPAddress = domain.IPAddress;
    ormEntity.CreatedAt = domain.CreatedAt;
    ormEntity.UpdatedAt = domain.UpdatedAt;
    ormEntity.DeletedAt = domain.DeletedAt;
    return ormEntity;
  }
  private toDomainEntity(ormEntity: AudiLogOrmEntity): AudiLog {
    return new AudiLog(
      ormEntity.AudiLogID,
      ormEntity.UserID,
      ormEntity.Action,
      ormEntity.Details,
      ormEntity.IPAddress,
      ormEntity.CreatedAt,
      ormEntity.UpdatedAt,
      ormEntity.DeletedAt,
    );
  }

  async create(audiLog: AudiLog): Promise<AudiLog> {
    const audiLogEntity = this.toOrmEntity(audiLog);
    const savedEntity = await this.audiLogRepository.save(audiLogEntity);
    return this.toDomainEntity(savedEntity);
  }

  async findById(id: number): Promise<AudiLog | null> {
    const audiLog = await this.audiLogRepository.findOne({ where: { AudiLogID: id } });
    if (!audiLog) {
      throw new NotFoundException(`Audi log with ID ${id} not found`);
    }
    return audiLog;
  }

  async findAll(): Promise<AudiLog[]> {
    return await this.audiLogRepository.find();
  }

  async update(id: number, audiLog: AudiLog): Promise<AudiLog | null> {
    const existingAudiLog = await this.findById(id);
    if (!existingAudiLog) {
      throw new NotFoundException(`Audi log with ID ${id} not found`);
    }
    
    const updatedAudiLog = Object.assign(existingAudiLog, audiLog);
    return await this.audiLogRepository.save(updatedAudiLog);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.audiLogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Audi log with ID ${id} not found`);
    }
    return true;
  }
}
