import { Injectable, Inject } from '@nestjs/common';
import { UserDepartamentRepositoryInterface } from '../../domain/interfaces/user-departament.repository.interface';
import { UserDepartament } from '../../domain/entities/user-departament.entity';
import { CreateUserDepartamentDto } from '../dtos/create-user-departament.dto';
import { UpdateUserDepartamentDto } from '../dtos/update-user-departament.dto';

@Injectable()
export class UserDepartamentService {
  constructor(
    @Inject('UserDepartamentRepositoryInterface')
    private readonly userDepartamentRepositoryInterface: UserDepartamentRepositoryInterface,
  ) {}

  async create(userDepartament: UserDepartament): Promise<UserDepartament> {
    return this.userDepartamentRepositoryInterface.create(userDepartament);
  }

  async findAll(): Promise<UserDepartament[]> {
    return this.userDepartamentRepositoryInterface.findAll();
  }

  async finOne(id: number): Promise<UserDepartament | null> {
    return this.userDepartamentRepositoryInterface.findOne(id);
  }

  async update(
    id: number,
    userDepartament: UserDepartament,
  ): Promise<UserDepartament> {
    return this.userDepartamentRepositoryInterface.update(id, userDepartament);
  }
  async delete(id: number): Promise<void> {
    return this.userDepartamentRepositoryInterface.delete(id);
  }
}
