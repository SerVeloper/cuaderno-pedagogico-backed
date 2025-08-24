import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TermsAndConditionsService } from '../../application/services/terms_and_conditions.services';
import { CreateTermsAndConditionsDto } from '../../application/dtos/terms_and_conditions.dtos';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Roles } from '../../../../common/decorators/roles.decorator';

@Controller('terms_and_conditions')
export class TermsAndConditionsController {
  constructor(
    private readonly termAndConditionsService: TermsAndConditionsService,
  ) {}

  @Post()
  create(@Body() CreateTermsAndConditionsDto: CreateTermsAndConditionsDto) {
    return this.termAndConditionsService.create(CreateTermsAndConditionsDto);
  }
  @Get()
  findAll() {
    return this.termAndConditionsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.termAndConditionsService.findOne(id);
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateTermsAndConditionsDto: CreateTermsAndConditionsDto,
  ) {
    return this.termAndConditionsService.update(id, updateTermsAndConditionsDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.termAndConditionsService.delete(id);
  }

}
