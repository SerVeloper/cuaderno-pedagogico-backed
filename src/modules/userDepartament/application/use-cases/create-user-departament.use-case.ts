import { Injectable } from '@nestjs/common';
import { UserDepartamentService } from '../services/user-departament.service';
import { UserDepartament } from '../../domain/entities/user-departament.entity'
import { CreateUserDepartamentDto } from '../dtos/create-user-departament.dto';

@Injectable()
export class CreateUserDepartamentUseCase {
  constructor( private readonly userDepartamentService: UserDepartamentService){}

  async execute( createUserDepartamentDto:CreateUserDepartamentDto):Promise<UserDepartament> {
    const userDepartament = new UserDepartament(
      0,
      createUserDepartamentDto.UserID,
      createUserDepartamentDto.DepartamentID, 
      new Date(),
    );
    return this.userDepartamentService.create(userDepartament);
  }
}