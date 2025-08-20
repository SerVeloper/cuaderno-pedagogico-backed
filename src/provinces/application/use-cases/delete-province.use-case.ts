import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';

@Injectable()
export class DeleteProvinceUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provincesRepositoryInterface: ProvincesRepositoryInterface,
  ) {}

  async execute(id: number): Promise<void> {
    const province = await this.provincesRepositoryInterface.findById(id);
    if (!province) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    if (!province.IsActive) {
      throw new BadRequestException(`Province with ID ${id} is already inactive`);
    }
    try {
      await this.provincesRepositoryInterface.delete(id, {IsActive: false});
    } catch (error) {
      throw new BadRequestException(`Failed to delete province with ID ${id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
