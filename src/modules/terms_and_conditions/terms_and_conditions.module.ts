import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TermsAndConditionsController } from './infrestructure/controllers/terms_and_conditions.controller';
import { TermsAndConditionsService } from './application/services/terms_and_conditions.services';
import { TermsAndConditionsRepository } from './infrestructure/repositories/terms_and_conditions.repository';

import { TermsAndConditions } from './domain/entities/terms_and_conditions.entity';
import { User } from '../../auth/domain/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TermsAndConditions,User ])],
  controllers: [TermsAndConditionsController],
  providers: [TermsAndConditionsService, {
    provide: 'TermsAndConditionsRepositoryInterface',
    useClass: TermsAndConditionsRepository
  },],
})
export class TermsAndConditionsModule{}
