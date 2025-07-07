import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from '../../../roles/domain/entities/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  UserID: number;

  @Column({ unique: true, length: 50 })
  UserName: string;

  @Column({ unique: true, length: 100 })
  Email: string;

  @Column({ length: 255 })
  PasswordHash: string;

  @Column({ length: 50 })
  FullName: string;

  @Column({ length: 15, nullable: true })
  Phone: string;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'RoleID' })
  role: Role;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @Column({ default: true })
  IsActive: boolean;
}
