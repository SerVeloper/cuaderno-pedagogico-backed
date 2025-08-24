import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDepartament } from '../../domain/entities/user-departament.entity';
import { UserDepartamentRepositoryInterface } from '../../domain/interfaces/user-departament.repository.interface';
import { UserDepartamentEntity } from './user-departament.orm.entity';

@Injectable()
export class UserDepartamentRepository
  implements UserDepartamentRepositoryInterface
{
  constructor(
    @InjectRepository(UserDepartamentEntity)
    private readonly repository: Repository<UserDepartamentEntity>,
  ) {}

  private toOrmEntity(
    domain: Partial<UserDepartament>,
  ): Partial<UserDepartamentEntity> {
    return {
      UserDepartamentID: domain.UserDepartamentID,
      UserID: domain.UserID,
      DepartamentID: domain.DepartamentID,
      createdAt: domain.createdAt,
    };
  }

  private toDomainEntity(entity: UserDepartamentEntity): UserDepartament {
    return new UserDepartament(
      entity.UserDepartamentID,
      entity.UserID,
      entity.DepartamentID,
      entity.createdAt,
    );
  }

  async create(userDepartament: UserDepartament): Promise<UserDepartament> {
    const entity = this.toOrmEntity(userDepartament);
    const savedEntity = await this.repository.save(entity);
    return this.toDomainEntity(savedEntity);
  }

  async findAll(): Promise<UserDepartament[]> {
    const entities = await this.repository.find();
    return entities.map(entity => this.toDomainEntity(entity));
  }

  async findOne(id: number): Promise<UserDepartament | null> {
    const entity = await this.repository.findOne({
      where: { UserDepartamentID: id },
    });
    return entity ? this.toDomainEntity(entity) : null;
  }

  async update(
    id: number,
    userDepartament: UserDepartament,
  ): Promise<UserDepartament> {
    await this.repository.update(id, this.toOrmEntity(userDepartament));
    const updateEntity = await this.repository.findOne({
      where: { UserDepartamentID: id },
    });
    if (!updateEntity) {
      throw new NotFoundException(` userDepartament with ID ${id} not found `);
    }
    return this.toDomainEntity(updateEntity);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`userDepartament with ID ${id} not found`);
    }
   
  }
}
