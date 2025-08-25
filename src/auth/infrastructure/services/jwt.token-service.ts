import { Inject } from '@nestjs/common';
import { ITokenService } from '../../application/services/token-service';
import { JwtService } from '@nestjs/jwt';

export class JwtTokenService implements ITokenService {
  constructor(@Inject(JwtService) private readonly jwt: JwtService) {
  }

  async sign(payload: Record<string, any>): Promise<string> {
    return this.jwt.signAsync(payload, { secret: process.env.JWT_SECRET || 'dev-secret' });
  }
}