import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';

import { CreateDepartmentDto } from '../../application/dtos/create-department.dto';
import { UpdateDepartmentDto } from '../../application/dtos/update-department.dto';

import { CreateDepartmentUseCase } from '../../application/use-cases/create-department.use-case';
import { FindAllDepartmentsUseCase } from '../../application/use-cases/find-all-departments.use-case';
import { FindOneDepartmentUseCase } from '../../application/use-cases/find-one-department.use-case';
import { UpdateDepartmentUseCase } from '../../application/use-cases/update-department.use-case';
import { DeleteDepartmentUseCase } from '../../application/use-cases/delete-department.use-case';

@Controller('departments')
export class DepartmentController {
  constructor(
    private readonly createDepartment: CreateDepartmentUseCase,
    private readonly findAllDepartments: FindAllDepartmentsUseCase,
    private readonly findOneDepartment: FindOneDepartmentUseCase,
    private readonly updateDepartment: UpdateDepartmentUseCase,
    private readonly deleteDepartment: DeleteDepartmentUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateDepartmentDto) {
    return this.createDepartment.execute(dto);
  }

  @Get()
  findAll() {
    return this.findAllDepartments.execute();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneDepartment.execute(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDepartmentDto) {
    return this.updateDepartment.execute(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteDepartment.execute(id);
  }
}
