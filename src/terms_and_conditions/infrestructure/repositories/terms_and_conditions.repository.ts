import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TermsAndConditions } from '../../domain/entities/terms_and_conditions.entity';
import { TermsAndConditionsInterface } from '../../domain/interfaces/terms_and_conditions.interface';
import { CreateTermsAndConditionsDto } from '../../application/dtos/terms_and_conditions.dtos';

@Injectable()
export class TermsAndConditionsRepository implements TermsAndConditionsInterface {
  constructor(
	@InjectRepository(TermsAndConditions)
	private readonly termsAndConditionsRepository: Repository<TermsAndConditions>,
  ) {}

  async create(createTermsAndConditionsDto: CreateTermsAndConditionsDto): Promise<TermsAndConditions> {
	const terms = this.termsAndConditionsRepository.create(createTermsAndConditionsDto);
	return this.termsAndConditionsRepository.save(terms);
  }

  async findAll(): Promise<TermsAndConditions[]> {
	return this.termsAndConditionsRepository.find();
  }

  async findOne(id: number): Promise<TermsAndConditions> {
	const terms = await this.termsAndConditionsRepository.findOne({ where: { TnCID: id } });
	if (!terms) {
	  throw new NotFoundException(`Terms and Conditions with id ${id} not found`);
	}
	return terms;
  }

  async update(id: number, updateTermsAndConditionsDto: Partial<CreateTermsAndConditionsDto>): Promise<TermsAndConditions> {
	await this.termsAndConditionsRepository.update(id, updateTermsAndConditionsDto);
	return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
	const result = await this.termsAndConditionsRepository.delete(id);
	if (result.affected === 0) {
	  throw new NotFoundException(`Terms and Conditions with id ${id} not found`);
	}
  }
}