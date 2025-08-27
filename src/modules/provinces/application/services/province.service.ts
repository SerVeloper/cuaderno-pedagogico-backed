import { Injectable, Inject } from '@nestjs/common';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { CreateProvinceDto } from '../dtos/create-province.dto';
import { UpdateProvinceDto } from '../dtos/update-province.dto';
import { CreateProvinceUseCase } from '../use-cases/create-province.use-case';
import { FindAllProvincesUseCase } from '../use-cases/find-all-province.use-case';
import { FindProvinceByIdUseCase } from '../use-cases/find-by-id-province.use-case';
import { UpdateProvinceUseCase } from '../use-cases/update-province.use-case';
import { DeleteProvinceUseCase } from '../use-cases/delete-province.use-case';
import { FindByDepartmentIdUseCase } from '../use-cases/find-by-department-id.use-case';

@Injectable()
export class ProvinceService {
  constructor(
    @Inject('CreateProvinceUseCase')
    private readonly createProvinceUseCase: CreateProvinceUseCase,
    @Inject('FindAllProvincesUseCase')
    private readonly findAllProvincesUseCase: FindAllProvincesUseCase,
    @Inject('FindProvinceByIdUseCase')
    private readonly findProvinceByIdUseCase: FindProvinceByIdUseCase,
    @Inject('UpdateProvinceUseCase')
    private readonly updateProvinceUseCase: UpdateProvinceUseCase,
    @Inject('DeleteProvinceUseCase')
    private readonly deleteProvinceUseCase: DeleteProvinceUseCase,
    @Inject('FindByDepartmentIdUseCase')
    private readonly findByDepartmentIdUseCase: FindByDepartmentIdUseCase,
  ) {}

  async create(createProvinceDto: CreateProvinceDto): Promise<ProvinceEntity> {
    return this.createProvinceUseCase.execute(createProvinceDto);
  }

  async findAll(): Promise<ProvinceEntity[]> {
    return this.findAllProvincesUseCase.execute();
  }

  async findById(id: number): Promise<ProvinceEntity | null> {
    return this.findProvinceByIdUseCase.execute(id);
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto): Promise<ProvinceEntity> {
    return this.updateProvinceUseCase.execute(id, updateProvinceDto);
  }

  async delete(id: number): Promise<void> {
    return this.deleteProvinceUseCase.execute(id);
  }

  async findByDepartmentId(departmentId: number): Promise<ProvinceEntity[]> {
    return this.findByDepartmentIdUseCase.execute(departmentId);
  }
}