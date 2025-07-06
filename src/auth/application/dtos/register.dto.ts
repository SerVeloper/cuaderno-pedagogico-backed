import { IsEmail, IsNotEmpty, MinLength, IsString } from "class-validator";

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  UserName: string;

  @IsEmail()
  Email: string;

  @IsNotEmpty()
  @MinLength(6)
  Password: string;

  @IsNotEmpty()
  @IsString()
  FullName: string;

  @IsString()
  Phone?: string;

  @IsNotEmpty()
  RoleID: number;
}