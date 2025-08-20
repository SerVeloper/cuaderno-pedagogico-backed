import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './roles/role.module';
import { PermissionModule } from './permissions/permission.module';
import { DepartmentModule } from './departments/department.module';
import { TermsAndConditionsModule } from './terms_and_conditions/terms_and_conditions.module';
import {UserDepartamentModule} from './userDepartament/user-departament.module'
import {EmailModule} from './emails/emails.module'
import { PeriodModule } from './period/period.module';
import { UserRoleModule } from './user-roles/user-role.module';
import { AudiLogModule } from './audi-logs/audi-log.module';
import { DimensionModule } from './dimension/dimension.module';
import { PassportModule } from '@nestjs/passport';
import { CommonModule } from './common/common.module';
import { JwtModule } from '@nestjs/jwt';
import { ProvincesModule } from './provinces/province.module';
import { LevelModule } from './levels/level.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    DepartmentModule,
    TermsAndConditionsModule,
    ProvincesModule,
    LevelModule,
    UserDepartamentModule,
    EmailModule,
    PeriodModule,
    UserRoleModule,
    AudiLogModule,
    DimensionModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    CommonModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AppModule {}
