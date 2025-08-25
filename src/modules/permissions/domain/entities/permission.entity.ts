import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn('increment')
  PermissionID: number;

  @Column({ unique: true, length: 50 })
  PermissionName: string;

  @Column({ nullable: true, length: 255 })
  Description: string;

  @CreateDateColumn()
  created_at: Date;
}
