import { Injectable, Inject } from '@nestjs/common';
import { Role} from '../../domain/entities/role.entity';
import { CreateRoleUseCase } from '../use-cases/create-role.use-case';
import { FindAllRoleUseCase } from '../use-cases/find-all-role.use-case';
import { UpdateRoleUseCase } from '../use-cases/update-role.use-case';
import { FindByIdRoleUseCase } from '../use-cases/find-by-id-role.use-case';
import { DeleteRoleUseCase } from '../use-cases/delete-role.use-case';  
import { CreateRoleDto } from '../dtos/create-role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject('CreateRoleUseCase')
    private readonly createRoleUseCase: CreateRoleUseCase,
    @Inject('FindAllRoleUseCase')
    private readonly findAllRoleUseCase: FindAllRoleUseCase,
    @Inject('UpdateRoleUseCase')
    private readonly updateRoleUseCase: UpdateRoleUseCase,
    @Inject('FindByIdRoleUseCase')
    private readonly findByIdRoleUseCase: FindByIdRoleUseCase,
    @Inject('DeleteRoleUseCase')
    private readonly deleteRoleUseCase: DeleteRoleUseCase
  ) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.createRoleUseCase.execute({ createRoleDto });
  }

  async findAllRoles(): Promise<Role[]> {
    return this.findAllRoleUseCase.execute();
  }

  async findRoleById(id: number): Promise<Role> {
    return this.findByIdRoleUseCase.execute(id);
  }

  async updateRole(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    return this.updateRoleUseCase.execute({ id, updateRoleDto });
  }

  async deleteRole(id: number): Promise<boolean> {
    return this.deleteRoleUseCase.execute(id);
  }
}