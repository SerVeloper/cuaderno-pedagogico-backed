import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLevelDto {
  @ApiProperty({
    description: 'Description of the level',
    example: 'Beginner Level',
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  Description: string;

  @ApiPropertyOptional({
    description: 'Indicates if the level is active',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
