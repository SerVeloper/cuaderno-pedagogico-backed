
import { Entity, Column,OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../../domain/entities/role.entity';
import { UserRoleEntity } from '../../../user-roles/infrastructure/repositories/user-role.orm.entity';


@Entity('roles')
export class RoleOrmEntity implements Role {
  @PrimaryGeneratedColumn()
  RoleID: number;

  @Column({ unique: true })
  RoleName: string;

  @Column({ nullable: true })
  Description: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  DeletedAt: Date | null;

  @OneToMany(() => UserRoleEntity, ur => ur.role)
  userRoles!: UserRoleEntity[];

}