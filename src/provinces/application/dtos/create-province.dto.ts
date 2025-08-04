import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean, IsNumber } from 'class-validator';

export class CreateProvinceDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @IsNotEmpty()
  @IsNumber()
  department_id: number;
}
