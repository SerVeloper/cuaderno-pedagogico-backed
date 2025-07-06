import { Permission } from "../entities/permission.entity";
import { CreatePermissionDto } from "../../application/dtos/permission.dto";

export interface PermissionRepositoryInterface {
    create(createPermissionDto: CreatePermissionDto): Promise<Permission>;
    findAll(): Promise<Permission[]>;
    findOne(id: number): Promise<Permission | null>;
    update(id: number, updatePermissionDto: CreatePermissionDto): Promise<Permission>;
    delete(id: number): Promise<void>;
}