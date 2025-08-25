import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean } from 'class-validator';

export class CreateLevelDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  Description: string;

  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
