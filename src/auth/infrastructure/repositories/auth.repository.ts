import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../domain/entities/user.entity";
import { AuthRepositoryInterface } from "../../domain/interfaces/auth.repository.interface";
import { RegisterDto } from "../../application/dtos/register.dto";

@Injectable()
export class AuthRepository implements AuthRepositoryInterface {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { Email: email } });
  }

  async create(registerDto: RegisterDto): Promise<User> {
    const user = this.userRepository.create({
      ...registerDto,
      PasswordHash: registerDto.Password,
    });
    return this.userRepository.save(user);
  }
}