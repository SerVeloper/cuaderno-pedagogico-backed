import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../../domain/entities/department.entity';
import { DepartmentRepositoryInterface } from '../../domain/interfaces/department.repository.interface';
import { CreateDepartmentDto } from '../../application/dtos/department.dto';

@Injectable()
export class DepartmentRepository implements DepartmentRepositoryInterface {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department = this.departmentRepository.create(createDepartmentDto);
    return this.departmentRepository.save(department);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async findOne(id: number): Promise<Department | null> {
    const department = await this.departmentRepository.findOne({
      where: { DepartmentID: id },
    });
    if (!department) throw new NotFoundException('Department not found');
    return department;
  }

  async update(
    id: number,
    updateDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    const department = await this.findOne(id);
    department!.DepartmentName = updateDepartmentDto.DepartmentName;
    department!.Description = updateDepartmentDto.Description ?? '';
    return this.departmentRepository.save(department!);
  }

  async delete(id: number): Promise<void> {
    const department = await this.findOne(id);
    await this.departmentRepository.remove(department!);
  }
}
