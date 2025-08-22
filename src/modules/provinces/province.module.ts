import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceController } from './infraestructure/controllers/province.controller';
import { ProvinceService } from './application/services/province.service';
import { ProvinceOrmEntity } from './infraestructure/repositories/province.orm.entity';
import { DepartmentOrmEntity } from '../departments/infraestructure/repositories/department.orm.entity';
import { ProvinceRepository } from './infraestructure/repositories/province.repository';
import { DepartmentRepository } from '../departments/infraestructure/repositories/department.repository';
import { CreateProvinceUseCase } from './application/use-cases/create-province.use-case';
import { FindAllProvincesUseCase } from './application/use-cases/find-all-province.use-case';
import { FindProvinceByIdUseCase } from './application/use-cases/find-by-id-province.use-case';
import { UpdateProvinceUseCase } from './application/use-cases/update-province.use-case';
import { DeleteProvinceUseCase } from './application/use-cases/delete-province.use-case';

@Module({
  controllers: [ProvinceController],
  providers: [
    ProvinceService,
    {
      provide: 'CreateProvinceUseCase',
      useClass: CreateProvinceUseCase,
    },
    {
      provide: 'FindAllProvincesUseCase',
      useClass: FindAllProvincesUseCase,
    },
    {
      provide: 'FindProvinceByIdUseCase',
      useClass: FindProvinceByIdUseCase,
    },
    {
      provide: 'UpdateProvinceUseCase',
      useClass: UpdateProvinceUseCase,
    },
    {
      provide: 'DeleteProvinceUseCase',
      useClass: DeleteProvinceUseCase,
    },
    {
      provide: 'ProvincesRepositoryInterface',
      useClass: ProvinceRepository,
    },
    {
      provide: 'DepartmentsRepositoryInterface',
      useClass: DepartmentRepository,
    },
  ],
  imports: [
    TypeOrmModule.forFeature([ProvinceOrmEntity, DepartmentOrmEntity]),
  ],
})
export class ProvincesModule {}