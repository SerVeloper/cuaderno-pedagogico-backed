import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, BadRequestException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { RegisterUserUseCase } from '../../application/use-cases/register.use-case';
import { LoginUseCase } from '../../application/use-cases/login.use-case';
import { AssignRoleUseCase } from '../../application/use-cases/assign-role.use-case';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { LoginDto } from '../../application/dtos/login.dto';
import { AssignRoleDto } from '../../application/dtos/assign-role.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly register: RegisterUserUseCase,
    private readonly login: LoginUseCase,
    private readonly assignRole: AssignRoleUseCase,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    try {
      const user = await this.register.execute(dto);
      return {
        id: user.UserID,
        username: user.UserName,
        email: user.Email,
        fullName: user.FullName,
        roles: user.roles.map(r => r.RoleName),
      };
    } catch (error) {
      throw new BadRequestException(error.message || 'Registration failed');
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async loginUser(@Body() dto: LoginDto) {
    try {
      return await this.login.execute(dto);
    } catch (error) {
      throw new UnauthorizedException(error.message || 'Login failed');
    }
  }

  @Post('assign-role')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin','user')
  async assignRoleToUser(@Body() dto: AssignRoleDto) {
    try {
      await this.assignRole.execute(dto);
      return { message: 'Role assigned successfully' };
    } catch (error) {
      if (error.message === 'User not found' || error.message === 'Role not found') {
        throw new BadRequestException(error.message);
      }
      throw new ForbiddenException('Access denied');
    }
  }
}