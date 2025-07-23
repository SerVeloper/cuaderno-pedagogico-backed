import { TermsAndConditions } from '../entities/terms_and_conditions.entity';
import { CreateTermsAndConditionsDto } from '../../application/dtos/terms_and_conditions.dtos';

export interface TermsAndConditionsInterface {
  create(
    createTermsAndConditionsDto: CreateTermsAndConditionsDto,
  ): Promise<TermsAndConditions>;
  findAll(): Promise<TermsAndConditions[]>;
  findOne(id: number): Promise<TermsAndConditions | null>;
  update(
    id: number,
    updateTermsAndConditionsDto: CreateTermsAndConditionsDto,
  ): Promise<TermsAndConditions>;
  delete(id: number): Promise<void>;
}
