import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AssignRoleDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  roleId: number;
}
