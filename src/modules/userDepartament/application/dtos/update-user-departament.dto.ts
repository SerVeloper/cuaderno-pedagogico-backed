import { IsNotEmpty,IsInt,IsOptional } from "class-validator";

export class UpdateUserDepartamentDto {
  @IsOptional()
  @IsInt()
  UserID: number;

  @IsOptional()
  @IsInt()
  DepartamentID: number;
}