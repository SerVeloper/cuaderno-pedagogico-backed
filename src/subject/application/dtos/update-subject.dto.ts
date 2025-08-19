import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EvaluationType } from '../../domain/entities/evaluation-type';

export class UpdateSubjectDto {
  @ApiProperty({
    description: 'Name of the subject',
    example: 'Mathematics',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  Name?: string;

  @ApiProperty({
    description: 'ID of the level this subject belongs to',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  LevelId?: number;

  @ApiProperty({
    description: 'Type of evaluation for this subject',
    enum: EvaluationType,
    example: EvaluationType.FORMATIVE,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(EvaluationType, {
    message: 'EvaluationType must be either Formative or Summative',
  })
  EvaluationType?: EvaluationType;
}