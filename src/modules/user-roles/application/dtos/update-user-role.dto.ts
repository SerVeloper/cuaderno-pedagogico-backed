import { IsNotEmpty } from 'class-validator';
export class UpdateUserRoleDto {
  @IsNotEmpty()
  UserID: number;

  @IsNotEmpty()
  RoleID: number;
}
