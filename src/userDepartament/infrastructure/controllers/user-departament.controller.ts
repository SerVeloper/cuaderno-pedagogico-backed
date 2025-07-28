import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpCode,
  UseGuards,
  ParseIntPipe,
  
} from '@nestjs/common'
import { CreateUserDepartamentUseCase } from '../../application/use-cases/create-user-departament.use-case'
import { FindAllUserDepartamentUseCase } from '../../application/use-cases/find-all-user-departament.use-case'
import { FindOneUserDepartamentUseCase } from '../../application/use-cases/find-one-user-departament.use-case'
import { UpdateUserDepartamentUseCase} from '../../application/use-cases/update-user-departament.use-case'
import { DeleteUserDepartamentUseCase } from '../../application/use-cases/delete-user-departament.use-case'
import { CreateUserDepartamentDto } from '../../application/dtos/create-user-departament.dto'
import { UpdateUserDepartamentDto } from '../../application/dtos/update-user-departament.dto'
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard'
import {Roles} from '../../../common/decorators/roles.decorator'
// import { ApiTags } from '@nestjs/swagger'

@Controller('user-departament')

export class UserDepartamentController {
  constructor(
    private readonly createUserDepartamentUseCase: CreateUserDepartamentUseCase,
    private readonly findAllUserDepartamentUseCase:FindAllUserDepartamentUseCase,
    private readonly findOneUserDepartamentUseCase: FindOneUserDepartamentUseCase,
    private readonly updateUserDepartamentUseCase: UpdateUserDepartamentUseCase,
    private readonly deleteUserDepartamentUseCase: DeleteUserDepartamentUseCase,

  ){}
  
  @Post()
  async create(@Body() createUserDepartamentDto: CreateUserDepartamentDto) {
    return this.createUserDepartamentUseCase.execute(createUserDepartamentDto)
  }

@Get()
async findAll() {
  return this.findAllUserDepartamentUseCase.execute()
}

@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.findOneUserDepartamentUseCase.execute(id);
}

@Put(':id')
async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDepartamentDto:UpdateUserDepartamentDto) {
  return this.updateUserDepartamentUseCase.execute(id, updateUserDepartamentDto);
}

@Delete(':id')
async delete(@Param('id', ParseIntPipe) id: number) {
  await this.deleteUserDepartamentUseCase.execute(id);
  return { message: `User Departament with ID ${id} deleted successfully` };

}

}
