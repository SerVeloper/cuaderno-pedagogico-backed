import { IsString, IsOptional, IsBoolean, IsNumber, MaxLength } from 'class-validator';

export class UpdateProvinceDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  Name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  Description?: string;

  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;

  @IsOptional()
  @IsNumber()
  DepartmentId?: number;
}