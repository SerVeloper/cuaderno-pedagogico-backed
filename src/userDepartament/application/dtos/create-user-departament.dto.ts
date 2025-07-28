import { IsNotEmpty,IsInt } from "class-validator";

export class CreateUserDepartamentDto {
  @IsNotEmpty()
  @IsInt()
  UserID: number;

  @IsNotEmpty()
  @IsInt()
  DepartamentID: number;
}