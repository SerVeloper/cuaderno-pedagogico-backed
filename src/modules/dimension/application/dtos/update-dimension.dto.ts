import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';


export class UpdateDimensionDto {
  @IsNotEmpty()
  @IsString()
  Name: string;

  @IsNotEmpty()
  @IsString()
  Description: string;

  @IsNotEmpty()
  @IsInt()
  SubjectID: number;

  @IsNotEmpty()
  @IsInt()
  CourseID: number;

  @IsNotEmpty()
  IsActive: boolean;
}