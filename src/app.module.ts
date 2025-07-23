import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './roles/role.module';
import { PermissionModule } from './permissions/permission.module';
import { DepartmentModule } from './departments/department.module';
import { TermsAndConditionsModule } from './terms_and_conditions/terms_and_conditions.module';
import { PassportModule } from '@nestjs/passport';
import { CommonModule } from './common/common.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    DepartmentModule,
    TermsAndConditionsModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    CommonModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AppModule {}
