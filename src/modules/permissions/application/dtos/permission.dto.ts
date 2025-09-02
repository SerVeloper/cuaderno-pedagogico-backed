import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty({ example: 'ManageUsers' })
  @IsNotEmpty()
  @IsString()
  PermissionName: string;

  @ApiProperty({ example: 'Allows managing user accounts' })
  @IsString()
  Description?: string;
}
