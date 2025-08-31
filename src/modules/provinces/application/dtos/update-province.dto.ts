import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsNumber, MaxLength } from 'class-validator';

export class UpdateProvinceDto {
  @ApiProperty({
    name: 'Name',
    example: 'Oropeza',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  Name?: string;

  @ApiProperty({
    name: 'Description',
    example: 'Province of Chuquisaca',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  Description?: string;

  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;

  @ApiProperty({
    name: 'DepartmentId',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  DepartmentId?: number;
}