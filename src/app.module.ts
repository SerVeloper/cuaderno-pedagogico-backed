import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './modules/roles/role.module';
import { PermissionModule } from './modules/permissions/permission.module';
import { DepartmentModule } from './modules/departments/department.module';
import { TermsAndConditionsModule } from './modules/terms_and_conditions/terms_and_conditions.module';
import {UserDepartamentModule} from './modules/userDepartament/user-departament.module'
import {EmailModule} from './modules/emails/emails.module'
import { PeriodModule } from './modules/period/period.module';
import { UserRoleModule } from './modules/user-roles/user-role.module';
import { AudiLogModule } from './modules/audi-logs/audi-log.module';
import { DimensionModule } from './modules/dimension/dimension.module';
import { PassportModule } from '@nestjs/passport';
import { CommonModule } from './common/common.module';
import { JwtModule } from '@nestjs/jwt';
import { ProvincesModule } from './modules/provinces/province.module';
import { LevelModule } from './modules/levels/level.module';
import { SubjectModule } from './modules/subject/subject.module';

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
    SubjectModule,
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
