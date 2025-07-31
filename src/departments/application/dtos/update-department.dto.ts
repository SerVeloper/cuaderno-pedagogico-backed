import { IsString, IsOptional, IsBoolean, IsDate } from 'class-validator';

export class UpdateDepartmentDto {

  @IsOptional()
  @IsString()
  Name: string;

  @IsOptional()
  @IsString()
  Description: string;

  @IsOptional()
  @IsBoolean()
  IsActive: boolean;

  @IsOptional()
  @IsDate()
  CreatedAt: Date;

  @IsOptional()
  @IsDate()
  UpdatedAt: Date;
}
