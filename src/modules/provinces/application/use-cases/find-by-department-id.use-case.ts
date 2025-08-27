import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { ProvincesRepositoryInterface } from '../../domain/interfaces/province.repository.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { DepartmentsRepositoryInterface } from '../../../departments/domain/interfaces/department.repository.interface';

@Injectable()
export class FindByDepartmentIdUseCase {
  constructor(
    @Inject('ProvincesRepositoryInterface')
    private provincesRepository: ProvincesRepositoryInterface,
    @Inject('DepartmentsRepositoryInterface')
    private departmentsRepository: DepartmentsRepositoryInterface
  ) {}

  async execute(departmentId: number): Promise<ProvinceEntity[]> {
    const department = await this.departmentsRepository.findById(departmentId);
    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return this.provincesRepository.findByDepartmentId(departmentId);
  }
  catch(error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new BadRequestException(`Failed to retrieve provinces: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
