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
import { CreateEmailUseCase } from '../../application/use-cases/create-emails.use-case'
import { FindAllEmailUseCase } from '../../application/use-cases/find-all-emails.use-case'
import { FindOneEmailUseCase } from '../../application/use-cases/find-one.use-case'
import { UpdateEmailUseCase } from '../../application/use-cases/update-emails.use-case'
import { DeleteEmailUseCase } from '../../application/use-cases/delete-emails.use-case'
import { CreateEmailDto } from '../../application/dtos/create-emails.dto'
import { UpdateEmailDto } from '../../application/dtos/update-emails.dto'
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard'
import {Roles} from '../../../common/decorators/roles.decorator'

@Controller('emails')
export class EmailController {
  constructor (
    private readonly createEmailUseCase:CreateEmailUseCase,
    private readonly findAllEmailUseCase:FindAllEmailUseCase,
    private readonly findOneEmailUseCase:FindOneEmailUseCase,
    private readonly updateEmailUseCase:UpdateEmailUseCase,
    private readonly deleteEmailUseCase:DeleteEmailUseCase,
  ){}

  @Post()
  async create(@Body() createEmailDto:CreateEmailDto){
    return this.createEmailUseCase.execute(createEmailDto)
  }

  @Get()
  async findAll() { 
    return this.findAllEmailUseCase.execute()
  }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id:number) {
    return this.findOneEmailUseCase.execute(id)
  }

  @Put(':id')
  async update(@Param('id',ParseIntPipe) id:number, @Body() updateEmailDto:UpdateEmailDto) {
    return this.updateEmailUseCase.update(id,updateEmailDto)
  }

  @Delete(':id')
  async declare(@Param('id',ParseIntPipe) id:number) {
    await this.deleteEmailUseCase.execute(id)
    return { message: `Email with ID ${id}  deletes succesfuly`}
  }
}