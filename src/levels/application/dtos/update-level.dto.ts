import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLevelDto {
  @ApiProperty({
    description: 'Description of the educational level',
    example: 'Secundaria',
    maxLength: 255,
    required: false
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  Description?: string;

  @ApiProperty({
    description: 'Status of the level',
    example: true,
    required: false
  })
  @IsOptional()
  @IsBoolean()
  IsActive?: boolean;
}
