import { Injectable, Inject } from '@nestjs/common';
import { TermsAndConditionsInterface } from '../../domain/interfaces/terms_and_conditions.interface';
import { CreateTermsAndConditionsDto } from '../dtos/terms_and_conditions.dtos';
import { TermsAndConditions } from '../../domain/entities/terms_and_conditions.entity';
@Injectable()
export class TermsAndConditionsService {
  constructor(
    @Inject('TermsAndConditionsRepositoryInterface')
    private readonly termsAndConditionsRepository: TermsAndConditionsInterface,
  ) {}

  async create(
    createTermsAndConditionsDto: CreateTermsAndConditionsDto,
  ): Promise<TermsAndConditions> { 
    return this.termsAndConditionsRepository.create(createTermsAndConditionsDto);
  }

  async findAll(): Promise<TermsAndConditions[]> { 
    return this.termsAndConditionsRepository.findAll();
  }

  async findOne(id: number): Promise<TermsAndConditions | null> {  
    return this.termsAndConditionsRepository.findOne(id);
  }

  async update(
    id: number,
    updateTermsAndConditionsDto: CreateTermsAndConditionsDto,
  ): Promise<TermsAndConditions> { 
    return this.termsAndConditionsRepository.update(id, updateTermsAndConditionsDto);
  }

  async delete(id: number): Promise<void> { 
    return this.termsAndConditionsRepository.delete(id);
  }
}