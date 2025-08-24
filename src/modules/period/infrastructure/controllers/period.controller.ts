import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpCode, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CreatePeriodUseCase } from '../../application/use-cases/create-period.use-case';
import { FindAllPeriodUseCase } from '../../application/use-cases/find-all-period.use-case';
import { FindByIDPeriodUseCase } from '../../application/use-cases/find-by-id-period.use-case';
import { UpdatePeriodUseCase } from '../../application/use-cases/update-period.use-case';
import { DeletePeriodUseCase } from '../../application/use-cases/delete-period.use-case';
import { CreatePeriodDto } from '../../application/dtos/create-period.dto';
import { UpdatePeriodDto } from '../../application/dtos/update-period.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Roles } from '../../../../common/decorators/roles.decorator';

@Controller('periods')
export class PeriodController {
  constructor(
    private readonly createPeriodUseCase: CreatePeriodUseCase,
    private readonly findAllPeriodUseCase: FindAllPeriodUseCase,
    private readonly findByIDPeriodUseCase: FindByIDPeriodUseCase,
    private readonly updatePeriodUseCase: UpdatePeriodUseCase,
    private readonly deletePeriodUseCase: DeletePeriodUseCase,
  ) {}

  @Post()
  async create(@Body() createPeriodDto: CreatePeriodDto) {
    return this.createPeriodUseCase.execute(createPeriodDto);
  }

  @Get()
  async findAll() {
    return this.findAllPeriodUseCase.execute();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.findByIDPeriodUseCase.execute(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePeriodDto: UpdatePeriodDto) {
    return this.updatePeriodUseCase.execute(id, updatePeriodDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.deletePeriodUseCase.execute(id);
    return { message: `Period with ID ${id} deleted successfully` };
  }
}
