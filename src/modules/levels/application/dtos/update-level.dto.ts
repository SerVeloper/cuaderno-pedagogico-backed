import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLevelDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    example: 'This is a description of the level',
    description: 'A brief description of the level',
    maxLength: 255,
    required: false,
  })
  Description?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: true,
    description: 'Indicates whether the level is active',
    required: false,
  })
  IsActive?: boolean;
}
