import{Injectable,Inject, NotFoundException}   from '@nestjs/common'
import {IAudiLogRepositoryInterface} from '../../domain/interfaces/audi-log.interface';

@Injectable()
export class DeleteAudiLogUseCase {
  constructor(
    @Inject('IAudiLogRepositoryInterface')
    private readonly actionsRepository: IAudiLogRepositoryInterface,
  ) {}

  async execute(id: number): Promise<boolean> {
    const audiLog = await this.actionsRepository.findById(id);
    if (!audiLog) {
      throw new NotFoundException(`Audi log with ID ${id} not found`);
    }

    const result = await this.actionsRepository.delete(id);
    if (!result) {
      throw new NotFoundException(`Failed to delete audi log with ID ${id}`);
    }
    
    return true;
  }
}