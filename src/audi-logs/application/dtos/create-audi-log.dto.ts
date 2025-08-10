import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';
export class CreateAudiLogDto {
  @IsNotEmpty()
  @IsInt()
   UserID: number;

  @IsNotEmpty()
  @IsString()
   Action: string;

  @IsOptional()
  @IsString()
   Details: string;

  @IsOptional()
  @IsString()
   IPAddress: string;

   
}
