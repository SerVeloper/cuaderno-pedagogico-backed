import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDepartamentDto {
  @ApiProperty({ example: 1, description: 'The ID of the user', required: false })
  @IsOptional()
  @IsInt()
  UserID: number;

  @ApiProperty({ example: 2, description: 'The ID of the department', required: false })
  @IsOptional()
  @IsInt()
  DepartamentID: number;
}
