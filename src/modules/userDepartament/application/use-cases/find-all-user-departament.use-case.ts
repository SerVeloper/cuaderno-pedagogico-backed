import { Injectable } from '@nestjs/common';
import { UserDepartamentService } from '../services/user-departament.service';
import { UserDepartament } from '../../domain/entities/user-departament.entity';

@Injectable()
export class FindAllUserDepartamentUseCase {
  constructor( private readonly userDepartamentService: UserDepartamentService) {}

  async execute(): Promise<UserDepartament[]> {
    return this.userDepartamentService.findAll();
  }
}
