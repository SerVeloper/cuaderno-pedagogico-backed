import { 
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

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
}