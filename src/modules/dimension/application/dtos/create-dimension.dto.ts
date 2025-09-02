import { IsNotEmpty, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDimensionDto {
  @ApiProperty({ example: 'Dimension Name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'This is a description of the dimension.' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsInt()
  subjectId: number;

  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  @IsInt()
  courseId: number;
}
