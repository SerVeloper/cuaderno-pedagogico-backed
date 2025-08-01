import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpCode, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CreateUserRoleUseCase } from '../../application/use-cases/create-user-role.use-case';
import { FindAllUserRoleUseCase } from '../../application/use-cases/find-all-user-role.use-case';
import { FindOneUserRoleUseCase } from '../../application/use-cases/find-one-user-role.use-case';
import { UpdateUserRoleUseCase } from '../../application/use-cases/update-user-role.use-case';
import { DeleteUserRoleUseCase } from '../../application/use-cases/delete-user-role.use-case';
import { CreateUserRoleDTO } from '../../application/dtos/create-user-role.dto';
import { UpdateUserRoleDto } from '../../application/dtos/update-user-role.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { Roles } from '../../../common/decorators/roles.decorator';



@Controller('user-role')
export class UserRoleController {
  constructor(
    private readonly createUserRoleUseCase: CreateUserRoleUseCase,
    private readonly findAllUserRoleUseCase: FindAllUserRoleUseCase,
    private readonly findOneUserRoleUseCase: FindOneUserRoleUseCase,
    private readonly updateUserRoleUseCase: UpdateUserRoleUseCase,
    private readonly deleteUserRoleUseCase: DeleteUserRoleUseCase,
  ) {}

  @Post()
  async create(@Body() createUserRoleDto: CreateUserRoleDTO) {
    return this.createUserRoleUseCase.execute(createUserRoleDto);
  }

  @Get()
  async findAll() {
    return this.findAllUserRoleUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneUserRoleUseCase.execute(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserRoleDto: UpdateUserRoleDto) {
    return this.updateUserRoleUseCase.execute(id, updateUserRoleDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.deleteUserRoleUseCase.execute(id);
    return { statusCode: HttpStatus.NO_CONTENT, message: `User role with ID ${id} deleted successfully` };
  }
}