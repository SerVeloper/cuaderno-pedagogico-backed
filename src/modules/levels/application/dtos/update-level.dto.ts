import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator';

export class UpdateLevelDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  Description?: string;

  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
