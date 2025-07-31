import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  Name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  Description: string;

  @IsOptional()
  @IsBoolean()
  IsActive: boolean;
}
