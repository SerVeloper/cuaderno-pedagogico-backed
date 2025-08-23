import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserOrm } from '../../../auth/infrastructure/repositories/user.orm.entity';
import { RoleOrmEntity } from '../../../roles/infrastructure/repositories/role.orm.entity';

@Entity('user_role')
export class UserRoleEntity {
  @PrimaryGeneratedColumn()
  UserRoleID: number;

  @Column()
  UserID: number;

  @Column()
  RoleID: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserOrm, (user) => user.userRoles)
  @JoinColumn({ name: 'UserID' })
  user: UserOrm;

 @ManyToOne(() => RoleOrmEntity, r => r.userRoles)
  @JoinColumn({ name: 'RoleID' })
  role!: RoleOrmEntity;
}
