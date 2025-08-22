import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany,
} from 'typeorm';
import { UserRoleEntity } from '../../../user-roles/infrastructure/repositories/user-role.orm.entity';

@Entity({ name: 'users' })
export class UserOrm {
  @PrimaryGeneratedColumn({ name: 'UserID', type: 'int' })
  id!: number;

  @Column({ name: 'UserName', type: 'varchar', length: 50, unique: true })
  username!: string;

  @Column({ name: 'Email', type: 'varchar', length: 100, unique: true })
  email!: string;

  @Column({ name: 'PasswordHash', type: 'varchar', length: 255 })
  passwordHash!: string;

  @Column({ name: 'FullName', type: 'varchar', length: 50 })
  fullName!: string;

  @Column({ name: 'Phone', type: 'varchar', length: 15, nullable: true })
  phone!: string | null;

  @CreateDateColumn({ name: 'CreatedAt', type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'UpdatedAt', type: 'timestamp' })
  updatedAt!: Date;

  @Column({ name: 'IsActive', type: 'boolean', default: true })
  isActive!: boolean;

  @OneToMany(() => UserRoleEntity, ur => ur.user, { cascade: true })
  userRoles!: UserRoleEntity[]; 
}