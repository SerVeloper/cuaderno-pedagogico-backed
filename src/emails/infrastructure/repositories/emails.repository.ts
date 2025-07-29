import { Injectable, NotFoundException } from '@nestjs/common';
import { EmailsRepositoryInterface } from '../../domain/interfaces/emails.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailEntity } from './emails.orm.entity';
import { Repository } from 'typeorm';
import { Emails } from '../../domain/entities/emails.entity';

@Injectable()
export class EmailRepository implements EmailsRepositoryInterface {
  constructor(
    @InjectRepository(EmailEntity)
    private readonly repository: Repository<EmailEntity>,
  ) {}

  private toOrmEntity(domain: Partial<Emails>): Partial<EmailEntity> {
    return {
      EmailID: domain.EmailID,
      UserID: domain.UserID,
      Subject: domain.Subject,
      Body: domain.Body,
      SentAt: domain.SentAt,
    };
  }
  private toDomainEntity(entity: EmailEntity): Emails {
    return new Emails(entity.EmailID, entity.UserID, entity.Subject, entity.Body, entity.SentAt);
  }

  async create(emails: Emails): Promise<Emails> {
    const entity = this.toOrmEntity(emails);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<Emails[]> {
    const entities = await this.repository.find();
    return entities.map(this.toDomainEntity);
  }

  async findOne(id: number): Promise<Emails | null> {
    const entity = await this.repository.findOne({
      where: { EmailID: id },
    });

    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(id: number, emails: Emails): Promise<Emails> {
    await this.repository.update(id, this.toDomainEntity(emails));
    const updateEntity = await this.repository.findOne({ where: { EmailID: id } });
    if (!updateEntity) {
      throw new NotFoundException(`Email with ID ${id} not found `);
    }
    return this.toDomainEntity(updateEntity);
  }

  async delete(id: number): Promise<void> {
    const result= await this.repository.delete(id)
    if(result.affected === 0){
      throw new NotFoundException(`Email with ID ${id} not found`)
    }
  }
}
 