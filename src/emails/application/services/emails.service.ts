import { Injectable, Inject } from '@nestjs/common';
import { EmailsRepositoryInterface } from '../../domain/interfaces/emails.repository.interface';
import { Emails } from '../../domain/entities/emails.entity';

@Injectable()
export class EmailService {
  constructor(
    @Inject('EmailsRepositoryInterface')
    private readonly emailsRepositoryInterface: EmailsRepositoryInterface,
  ) {}

  async create(email: Emails): Promise<Emails> {
    return this.emailsRepositoryInterface.create(email);
  }

  async findAll(): Promise<Emails[]> {
    return this.emailsRepositoryInterface.findAll();
  }

  async findOne(id: number): Promise<Emails | null> {
    return this.emailsRepositoryInterface.findOne(id);
  }

  async update(id: number, email: Emails): Promise<Emails> {
    return this.emailsRepositoryInterface.update(id, email);
  }

  async delete(id: number): Promise<void> {
    return this.emailsRepositoryInterface.delete(id);
  }
}
