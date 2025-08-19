import { IsNotEmpty, IsInt, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EvaluationType } from '../../domain/entities/evaluation-type';

export class CreateSubjectDto {
  @ApiProperty({
    description: 'Name of the subject',
    example: 'Mathematics',
    maxLength: 255
  })
  @IsNotEmpty()
  @IsString()
  Name: string;
  
  @ApiProperty({
    description: 'ID of the level this subject belongs to',
    example: 1
  })
  @IsNotEmpty()
  @IsInt()
  LevelId: number;

  @ApiProperty({
    description: 'Type of evaluation for this subject',
    enum: EvaluationType,
    example: EvaluationType.FORMATIVE
  })
  @IsNotEmpty()
  @IsEnum(EvaluationType, {
    message: 'EvaluationType must be either Formative or Summative'
  })
  EvaluationType: EvaluationType;
}