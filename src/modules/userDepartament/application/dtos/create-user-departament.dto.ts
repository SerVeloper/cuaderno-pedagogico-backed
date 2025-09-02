import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDepartamentDto {
  @ApiProperty({ example: 1, description: 'The ID of the user' })
  @IsNotEmpty()
  @IsInt()
  UserID: number;

  @ApiProperty({ example: 2, description: 'The ID of the department' })
  @IsNotEmpty()
  @IsInt()
  DepartamentID: number;
}
