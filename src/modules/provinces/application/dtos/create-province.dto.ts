import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean, IsNumber } from 'class-validator';

export class CreateProvinceDto {
  @ApiProperty({
    name: 'Name',
    example: 'Oropeza',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  Name: string;

  @ApiProperty({
    name: 'Description',
    example: 'Province of Chuquisaca',
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  Description?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  IsActive: boolean;

  @ApiProperty({
    name: 'DepartmentId',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  DepartmentId: number;
}
