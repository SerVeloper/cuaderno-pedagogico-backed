import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDepartamentService } from '../services/user-departament.service';

@Injectable()
export class DeleteUserDepartamentUseCase  {
    constructor( private readonly userDepartamentService: UserDepartamentService){}
  async execute ( id:number): Promise<void> {
    const userDepartaent = await this.userDepartamentService.finOne(id)
    if( !userDepartaent) {
      throw new NotFoundException(`userDepartaent  with ID ${id} not found`)
  }
   await this.userDepartamentService.delete(id)
}
}