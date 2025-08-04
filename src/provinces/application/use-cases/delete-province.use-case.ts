import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Injectable()
export class DeleteProvinceUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private readonly provincesRepositoryInterface: ProvincesRepositoryInterface,
  ) {}

  @ApiOperation({ summary: 'Delete a province by ID' })
  @ApiResponse({ status: 200, description: 'Province deleted successfully' })
  @ApiResponse({ status: 404, description: 'Province not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async execute(id: number): Promise<void> {
    const province = await this.provincesRepositoryInterface.findById(id);
    if (!province) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
    if (!province.is_active) {
      throw new BadRequestException(`Province with ID ${id} is already inactive`);
    }
    try {
      await this.provincesRepositoryInterface.delete(id, {is_active: false});
    } catch (error) {
      throw new BadRequestException(`Failed to delete province with ID ${id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
