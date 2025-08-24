import { IsNotEmpty } from 'class-validator';

export class CreateUserRoleDTO {
  @IsNotEmpty()
  UserID: number;

  @IsNotEmpty()
  RoleID: number;
}
