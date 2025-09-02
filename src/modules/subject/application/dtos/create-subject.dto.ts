import { IsNotEmpty, IsInt, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EvaluationType } from '../../domain/entities/evaluation-type';

export class CreateSubjectDto {
  @ApiProperty({ example: 'Mathematics' })
  @IsNotEmpty()
  @IsString()
  Name: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  LevelId: number;

  @ApiProperty({ example: EvaluationType.FORMATIVE, enum: EvaluationType })
  @IsNotEmpty()
  @IsEnum(EvaluationType, {
    message: 'EvaluationType must be either Formative or Summative',
  })
  EvaluationType: EvaluationType;
}
