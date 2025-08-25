import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreatePeriodDto {
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
