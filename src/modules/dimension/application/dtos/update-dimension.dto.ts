import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDimensionDto {
  @ApiProperty({ example: 'Dimension Name' })
  @IsNotEmpty()
  @IsString()
  Name: string;

  @ApiProperty({ example: 'This is a description of the dimension.' })
  @IsNotEmpty()
  @IsString()
  Description: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  SubjectID: number;

  @ApiProperty({ example: 101 })
  @IsNotEmpty()
  @IsInt()
  CourseID: number;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  IsActive: boolean;
}
