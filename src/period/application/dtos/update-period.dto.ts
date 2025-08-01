import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class UpdatePeriodDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  @IsInt()
  year: number;
}
