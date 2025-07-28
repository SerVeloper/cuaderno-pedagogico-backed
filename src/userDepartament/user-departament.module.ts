import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDepartamentEntity } from './infrastructure/repositories/user-departament.orm.entity';
import { UserDepartamentController } from './infrastructure/controllers/user-departament.controller';
import { UserDepartamentService } from './application/services/user-departament.service';
import { UserDepartamentRepository } from './infrastructure/repositories/user-departament.repository';
import { CreateUserDepartamentUseCase } from './application/use-cases/create-user-departament.use-case';
import { FindAllUserDepartamentUseCase } from './application/use-cases/find-all-user-departament.use-case';
import { FindOneUserDepartamentUseCase } from './application/use-cases/find-one-user-departament.use-case';
import { UpdateUserDepartamentUseCase } from './application/use-cases/update-user-departament.use-case';
import { DeleteUserDepartamentUseCase } from './application/use-cases/delete-user-departament.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UserDepartamentEntity])],
  controllers: [UserDepartamentController],
  providers: [
    UserDepartamentService,
    {
      provide: 'UserDepartamentRepositoryInterface',
      useClass: UserDepartamentRepository,
    },
    CreateUserDepartamentUseCase,
    FindAllUserDepartamentUseCase,
    FindOneUserDepartamentUseCase,
    UpdateUserDepartamentUseCase,
    DeleteUserDepartamentUseCase,
  ],
})
export class UserDepartamentModule {}
