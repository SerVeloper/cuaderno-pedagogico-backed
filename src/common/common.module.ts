import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [JwtStrategy],
})
export class CommonModule {}