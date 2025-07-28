import { UserDepartament } from '../entities/user-departament.entity';
export interface UserDepartamentRepositoryInterface {
  create(userDepartament: UserDepartament): Promise<UserDepartament>;
  findAll(): Promise<UserDepartament[]>;
  findOne(id: number): Promise<UserDepartament | null>;
  update(id: number, userDepartament: UserDepartament): Promise<UserDepartament>;
  delete(id: number): Promise<void>;
}