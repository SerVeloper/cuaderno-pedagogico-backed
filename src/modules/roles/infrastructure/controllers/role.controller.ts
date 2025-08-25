import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { CreateRoleDto } from '../../application/dtos/create-role.dto';
import { UpdateRoleDto } from '../../application/dtos/update-role.dto';
import { CreateRoleUseCase } from '../../application/use-cases/create-role.use-case';
import { UpdateRoleUseCase } from '../../application/use-cases/update-role.use-case';
import { FindAllRoleUseCase } from '../../application/use-cases/find-all-role.use-case';
import { FindByIdRoleUseCase } from '../../application/use-cases/find-by-id-role.use-case';
import { DeleteRoleUseCase } from '../../application/use-cases/delete-role.use-case';
import { Role } from '../../domain/entities/role.entity';

import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Roles } from '../../../../common/decorators/roles.decorator';


@Controller('roles')
// @UseGuards(JwtAuthGuard)
export class RoleController { 
  constructor(
    @Inject('CreateRoleUseCase')
    private readonly createRoleUseCase: CreateRoleUseCase,
    @Inject('FindAllRoleUseCase')
    private readonly findAllRoleUseCase: FindAllRoleUseCase,
    @Inject('FindByIdRoleUseCase')
    private readonly findByIdRoleUseCase: FindByIdRoleUseCase,
    @Inject('UpdateRoleUseCase')
    private readonly updateRoleUseCase: UpdateRoleUseCase,
    @Inject('DeleteRoleUseCase')
    private readonly deleteRoleUseCase: DeleteRoleUseCase,

  ) {}

  @Post()
  // @Roles('admin')
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.createRoleUseCase.execute({ createRoleDto });
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.findAllRoleUseCase.execute();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Role> {
    return this.findByIdRoleUseCase.execute(id);
  }

  @Put(':id')
  // @Roles('admin')
  async update(
    @Param('id') id: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<Role> {
    return this.updateRoleUseCase.execute({ id, updateRoleDto });
  }

  @Delete(':id')
  // @Roles('admin')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.deleteRoleUseCase.execute(id);
  }
}