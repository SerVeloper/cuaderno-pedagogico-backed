import { IsString, IsOptional, IsBoolean, IsNumber, MaxLength } from 'class-validator';

export class UpdateProvinceDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsNumber()
  department_id?: number;
}