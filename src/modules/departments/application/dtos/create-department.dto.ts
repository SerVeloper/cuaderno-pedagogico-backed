import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({
    name: 'Name',
    example: 'Chuquisaca',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  Name: string;

  @ApiProperty({
    name: 'Description',
    example: 'Department of Chuquisaca',
    maxLength: 250,
  })
  @IsOptional()
  @IsString()
  @MaxLength(250)
  Description: string;

  @IsOptional()
  @IsBoolean()
  IsActive: boolean;
}
