import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty()
    @IsString()
    RoleName: string;

    @IsString()
    Description?: string;

    @IsString({ each: true })
    permissionIds?: number[];
}