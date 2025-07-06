import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Permission } from "../../../permissions/domain/entities/permission.entity";

@Entity("roles")
export class Role {
    @PrimaryGeneratedColumn("increment")
    RoleID: number;

    @Column({ unique: true, length: 50 })
    RoleName: string;

    @Column({ nullable: true, length: 255 })
    Description: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "role_permissions",
        joinColumn: { name: "RoleID", referencedColumnName: "RoleID" },
        inverseJoinColumn: { name: "PermissionID", referencedColumnName: "PermissionID" },
    })
    permissions: Permission[];

    @CreateDateColumn()
    created_at: Date;
}