import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRoleDto {
  @ApiProperty({ example: 1, description: 'The ID of the user' })
  @IsNotEmpty()
  UserID: number;

  @ApiProperty({ example: 2, description: 'The ID of the role' })
  @IsNotEmpty()
  RoleID: number;
}
