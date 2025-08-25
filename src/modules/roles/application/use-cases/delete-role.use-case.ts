import{Injectable,Inject, NotFoundException}   from '@nestjs/common'
import {RoleRepositoryInterface} from '../../domain/interfaces/role.repository.interface';

@Injectable()
export class DeleteRoleUseCase {
  constructor(
    @Inject('RoleRepositoryInterface')
    private readonly roleRepository: RoleRepositoryInterface,
  ) {}

  async execute(id: number): Promise<boolean> {
    const role = await this.roleRepository.findOne(id);
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }

    const result = await this.roleRepository.delete(id);
    if (!result) {
      throw new NotFoundException(`Failed to delete role with ID ${id}`);
    }
    return true;
  }
}