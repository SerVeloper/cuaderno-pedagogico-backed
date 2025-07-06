import { User } from "../entities/user.entity";
import { RegisterDto } from "../../application/dtos/register.dto";

export interface AuthRepositoryInterface {
  findByEmail(email: string): Promise<User | null>;
  create(registerDto: RegisterDto): Promise<User>;
}