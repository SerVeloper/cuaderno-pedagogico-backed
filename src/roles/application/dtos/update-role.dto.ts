import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsNotEmpty()
  @IsString()
  RoleName: string;

  @IsString()
  Description?: string;

}
