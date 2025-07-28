import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { AuthService } from './application/services/auth.service';
import { AuthRepository } from './infrastructure/repositories/auth.repository';
import { User } from './domain/entities/user.entity';
import { Role } from '../roles/domain/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, { provide: 'AuthRepositoryInterface', useClass: AuthRepository }],
  exports: [AuthService],
})
export class AuthModule {}
