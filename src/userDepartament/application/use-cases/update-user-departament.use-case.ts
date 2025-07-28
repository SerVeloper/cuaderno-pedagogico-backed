import {Injectable, NotFoundException} from '@nestjs/common'
import { UserDepartamentService } from '../services/user-departament.service'
import {UserDepartament} from '../../domain/entities/user-departament.entity'
import { UpdateUserDepartamentDto} from '../dtos/update-user-departament.dto'

@Injectable()
export class UpdateUserDepartamentUseCase { 
  constructor( private readonly userDepartamentService: UserDepartamentService){}

  async execute(id: number, UpdateUserDepartamentDto: UpdateUserDepartamentDto): Promise<UserDepartament> {
    const userDepartaent= await this.userDepartamentService.finOne(id)
    if( !userDepartaent){
      throw new NotFoundException( `userDepartament whit ID ${id} not found `)
    }
    const updateUserDepartamentDto = { ...userDepartaent, ...UpdateUserDepartamentDto }
    return this.userDepartamentService.update(id, updateUserDepartamentDto)
  }
}
