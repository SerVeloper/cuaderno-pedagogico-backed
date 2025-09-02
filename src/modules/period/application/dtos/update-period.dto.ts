import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePeriodDto {
  @ApiProperty({ example: 'First Semester' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '2025-01-01' })
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({ example: '2025-06-30' })
  @IsNotEmpty()
  endDate: Date;

  @ApiProperty({ example: 2025 })
  @IsNotEmpty()
  @IsInt()
  year: number;
}
