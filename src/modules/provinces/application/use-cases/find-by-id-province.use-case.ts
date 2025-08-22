import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';

@Injectable()
export class FindProvinceByIdUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provinceRepositoryInterface: ProvincesRepositoryInterface,
  ) {}

  async execute(id: number): Promise<ProvinceEntity> {
    const province = await this.provinceRepositoryInterface.findById(id);
    if (!province) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    return province;
  }
  catch(error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new BadRequestException(`Failed to retrieve province: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
