import { IsNotEmpty, IsInt, IsString, IsEnum } from 'class-validator';
import { EvaluationType } from '../../domain/entities/evaluation-type';

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsString()
  Name: string;
  
  @IsNotEmpty()
  @IsInt()
  LevelId: number;

  @IsNotEmpty()
  @IsEnum(EvaluationType, {
    message: 'EvaluationType must be either Formative or Summative'
  })
  EvaluationType: EvaluationType;
}