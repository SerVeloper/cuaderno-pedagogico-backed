import { IsNotEmpty, IsString } from "class-validator";

export class CreatePermissionDto {
    @IsNotEmpty()
    @IsString()
    PermissionName: string;

    @IsString()
    Description?: string;
}