import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailEntity } from './infrastructure/repositories/emails.orm.entity';
import { EmailController } from './infrastructure/controllers/emails.controller';
import { EmailService } from './application/services/emails.service';
import { EmailRepository } from './infrastructure/repositories/emails.repository';
import { CreateEmailUseCase } from './application/use-cases/create-emails.use-case';
import { FindAllEmailUseCase } from './application/use-cases/find-all-emails.use-case';
import { FindOneEmailUseCase } from './application/use-cases/find-one.use-case';
import { UpdateEmailUseCase } from './application/use-cases/update-emails.use-case';
import { DeleteEmailUseCase } from './application/use-cases/delete-emails.use-case';

@Module(
  {
    imports: [TypeOrmModule.forFeature([EmailEntity])],
    controllers: [EmailController],
    providers: [
      EmailService,
      {
        provide: 'EmailsRepositoryInterface',
        useClass: EmailRepository
      },
      CreateEmailUseCase,
      FindAllEmailUseCase,
      FindOneEmailUseCase,
      UpdateEmailUseCase,
      DeleteEmailUseCase
    ],
  })
export class EmailModule{}