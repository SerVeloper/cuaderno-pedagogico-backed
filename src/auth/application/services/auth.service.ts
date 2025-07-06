import { Injectable, UnauthorizedException, NotFoundException, Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AuthRepositoryInterface } from "../../domain/interfaces/auth.repository.interface";
import { RegisterDto } from "../dtos/register.dto";
import { LoginDto } from "../dtos/login.dto";
import { User } from "../../domain/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        @Inject("AuthRepositoryInterface") private readonly authRepository: AuthRepositoryInterface,
        private readonly jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(registerDto.Password, 10);
        const user = await this.authRepository.create({
            ...registerDto,
            Password: hashedPassword,
        });
        return user;
    }

    async login(loginDto: LoginDto): Promise<{ access_token: string }> {
        const user = await this.authRepository.findByEmail(loginDto.Email);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        const isPasswordValid = await bcrypt.compare(loginDto.Password, user.PasswordHash);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid credentials");
        }

        const payload = { sub: user.UserID, email: user.Email, role: user.role.RoleName };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}