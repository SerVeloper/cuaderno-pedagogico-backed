import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EvaluationType } from '../../domain/entities/evaluation-type';

export class UpdateSubjectDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  Name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  LevelId?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(EvaluationType, {
    message: 'EvaluationType must be either Formative or Summative',
  })
  EvaluationType?: EvaluationType;
}