import { Subject } from '../../domain/entities/subject.entity';
import { SubjectOrmEntity } from './subject.orm.entity';
import { SubjectRepositoryInterface } from '../../domain/interfaces/subject.interface';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubjectRepository implements SubjectRepositoryInterface {
  constructor(
    @InjectRepository(SubjectOrmEntity)
    private readonly subjectRepository: Repository<SubjectOrmEntity>,
  ) {}

  private toOrmEntity(subject: Subject): SubjectOrmEntity {
    const subjectOrm = new SubjectOrmEntity();

    if(subject.SubjectId !== 0){
      subjectOrm.SubjectId = subject.SubjectId;
    }

    subjectOrm.Name = subject.Name;
    subjectOrm.LevelId = subject.LevelId;
    subjectOrm.EvaluationType = subject.EvaluationType;

    return subjectOrm;
  }

  private toDomainEntity(subject: SubjectOrmEntity): Subject {
    return new Subject(
      subject.SubjectId,
      subject.Name,
      subject.LevelId,
      subject.EvaluationType,
      subject.CreatedAt,
      subject.UpdatedAt
    );
  }

  async create(subject: Subject): Promise<Subject> {
    const entity = this.toOrmEntity(subject);
    const savedEntity = await this.subjectRepository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<Subject[]> {
    const entities = await this.subjectRepository.find();
    return entities.map(entity => this.toDomainEntity(entity));
  }

  async findById(id: number): Promise<Subject | null> {
    const entity = await this.subjectRepository.findOne({ where: { SubjectId: id } });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, subject: Partial<Subject>): Promise<Subject | null> {
    const existingEntity = await this.subjectRepository.findOne({ where: { SubjectId: id } });
    if (!existingEntity) return null;

    Object.assign(existingEntity, {
      Name: subject.Name ?? existingEntity.Name,
      LevelId: subject.LevelId ?? existingEntity.LevelId,
      EvaluationType: subject.EvaluationType ?? existingEntity.EvaluationType,
    });

    const savedEntity = await this.subjectRepository.save(existingEntity);
    return this.toDomainEntity(savedEntity);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.subjectRepository.delete({ SubjectId: id });
    return result.affected !== undefined && result.affected !== null && result.affected > 0;
  }

}
