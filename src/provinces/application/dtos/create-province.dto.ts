import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean, IsNumber } from 'class-validator';

export class CreateProvinceDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  Name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  Description?: string;

  @IsNotEmpty()
  @IsBoolean()
  IsActive: boolean;

  @IsNotEmpty()
  @IsNumber()
  DepartmentId: number;
}
