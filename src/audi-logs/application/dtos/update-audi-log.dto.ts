import { IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateAudiLogDto {
  @IsOptional()
  @IsNumber()
  UserID: number;

  @IsOptional()
  @IsString()
  Action: string;

  @IsOptional()
  @IsString()
  Details: string;

  @IsOptional()
  @IsString()
  IPAddress: string;

}
