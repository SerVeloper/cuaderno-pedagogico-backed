import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'The name of the role' })
  @IsNotEmpty()
  @IsString()
  RoleName: string;

  @ApiProperty({ example: 'Administrator role with full permissions', description: 'A brief description of the role', required: false })
  @IsString()
  Description?: string;
}
