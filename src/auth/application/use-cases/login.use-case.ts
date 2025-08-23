import { UnauthorizedException } from '@nestjs/common';
import { UserRepositoryInterface } from '../../domain/interfaces/user.repository.interface';
import { IPasswordHasher } from '../services/password-hasher';
import { ITokenService } from '../services/token-service';
import { LoginDto } from '../dtos/login.dto';

export class LoginUseCase {
  constructor(
    private readonly users: UserRepositoryInterface,
    private readonly hasher: IPasswordHasher,
    private readonly tokens: ITokenService,
  ) {}

  async execute(dto: LoginDto): Promise<{ accessToken: string }> {
    const user =
      (await this.users.findByUsername(dto.userNameOrEmail)) ||
      (await this.users.findByEmail(dto.userNameOrEmail));

    if (!user?.IsActive) throw new UnauthorizedException('Invalid credentials');

    const ok = await this.hasher.comparePasswords(dto.Password, user.PasswordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const accessToken = await this.tokens.sign({
      sub: user.UserID,
      userName: user.UserName,
      email: user.Email,
      roles: user.roles.map(r => r.RoleName),
    });
// quiero que muetre el role del usuario
    console.log('User roles:', user.roles.map(r => r.RoleName));

    // Return the access token
    return { accessToken };
  }
}