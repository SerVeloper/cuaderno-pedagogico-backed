import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator';

export class UpdateDepartmentDto {
  @ApiProperty({
    name: 'Name',
    example: 'Chuquisaca',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  Name?: string;

  @ApiProperty({
    name: 'Description',
    example: 'Department of Chuquisaca',
    maxLength: 250,
  })
  @IsOptional()
  @IsString()
  @MaxLength(250)
  Description?: string;

  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
