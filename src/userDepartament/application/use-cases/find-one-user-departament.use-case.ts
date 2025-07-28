import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDepartamentService } from '../services/user-departament.service'
import { UserDepartament } from '../../domain/entities/user-departament.entity'
import { NotFoundError } from 'rxjs'

@Injectable()
export class FindOneUserDepartamentUseCase {
  constructor( private readonly userDepartamentService: UserDepartamentService){}

  async execute( id:number): Promise<UserDepartament> {
    const userDepartament = await this.userDepartamentService.finOne(id);
    if(!userDepartament){
      throw new NotFoundException(`userDepartaent  with ID ${id} not found`);
      
    }
    return userDepartament;
  }
}