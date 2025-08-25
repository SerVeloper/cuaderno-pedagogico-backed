import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, Inject } from '@nestjs/common';
import { CreateAudiLogDto } from '../../application/dtos/create-audi-log.dto';
import { CreateAudiLogUseCase } from '../../application/use-cases/create-audi-log.use-case';
import { UpdateAudiLogDto } from '../../application/dtos/update-audi-log.dto';
import { UpdateAudiLogUseCase } from '../../application/use-cases/update-audi-log.use-case';
import { FindAllAudiLogUseCase } from '../../application/use-cases/find-all-audi-log.use-case';
import { FindByIdAudiLogUseCase } from '../../application/use-cases/find-by-id-audi-log.use-case';
import { DeleteAudiLogUseCase } from '../../application/use-cases/delete-audi-log.use-case';
import { AudiLog } from '../../domain/entities/audi-log.entity';

@Controller('audi-logs')
export class AudiLogController {
  constructor(

    @Inject('CreateAudiLogUseCase')
    private readonly createAudiLogUseCase: CreateAudiLogUseCase,
    @Inject('FindAllAudiLogUseCase')
    private readonly findAllAudiLogUseCase: FindAllAudiLogUseCase,
    @Inject('FindByIdAudiLogUseCase')
    private readonly findByIdAudiLogUseCase: FindByIdAudiLogUseCase,
    @Inject('UpdateAudiLogUseCase')
    private readonly updateAudiLogUseCase: UpdateAudiLogUseCase,
    @Inject('DeleteAudiLogUseCase')
    private readonly deleteAudiLogUseCase: DeleteAudiLogUseCase,
  ) {}

  @Post()
  async create(@Body() createAudiLogDto: CreateAudiLogDto): Promise<AudiLog> {
    return this.createAudiLogUseCase.execute(createAudiLogDto);
  }

  @Get()
  async findAll(): Promise<AudiLog[]> {
    return this.findAllAudiLogUseCase.execute();
  } 
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<AudiLog> {
    return this.findByIdAudiLogUseCase.execute(id);
  }
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateAudiLogDto: UpdateAudiLogDto): Promise<AudiLog> {
    return this.updateAudiLogUseCase.execute(id, updateAudiLogDto);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<boolean>
  {
    return this.deleteAudiLogUseCase.execute(id);
  }
}