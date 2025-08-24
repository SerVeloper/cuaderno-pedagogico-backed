import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateEmailDto {
  @IsNotEmpty()
  @IsInt()
  UserID: number;

  @IsNotEmpty()
  Subject: string;

  @IsNotEmpty()
  Body: string;
}
