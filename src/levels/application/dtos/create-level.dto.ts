import { IsNotEmpty, IsString, IsOptional, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLevelDto {
  @ApiProperty({
    description: 'Description of the educational level',
    example: 'Primaria',
    maxLength: 255
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  Description: string;

  @ApiProperty({
    description: 'Status of the level',
    example: true,
    default: true,
    required: false
  })
  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
