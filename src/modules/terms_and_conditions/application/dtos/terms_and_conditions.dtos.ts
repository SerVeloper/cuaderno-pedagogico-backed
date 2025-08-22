import { IsNotEmpty, IsString, IsSemVer } from 'class-validator';

export class CreateTermsAndConditionsDto {
  @IsNotEmpty()
  UserID: number;

  @IsNotEmpty()
  @IsString()
  Version: string;
}
