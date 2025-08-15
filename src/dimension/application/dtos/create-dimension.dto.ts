import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateDimensionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  subjectId: number;

  @IsNotEmpty()
  @IsInt()
  courseId: number;

  
}