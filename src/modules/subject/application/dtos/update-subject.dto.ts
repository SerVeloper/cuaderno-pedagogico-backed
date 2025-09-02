import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EvaluationType } from '../../domain/entities/evaluation-type';

export class UpdateSubjectDto {
  @ApiProperty({
    example: 'Mathematics',
    description: 'The name of the subject',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  Name?: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the level associated with the subject',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  LevelId?: number;

  @ApiProperty({
    example: EvaluationType.FORMATIVE,
    description: 'The type of evaluation for the subject',
    enum: EvaluationType,
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(EvaluationType, {
    message: 'EvaluationType must be either Formative or Summative',
  })
  EvaluationType?: EvaluationType;
}
