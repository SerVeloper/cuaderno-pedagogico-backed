import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  DepartmentName: string;

  @IsString()
  Description?: string;
}
