import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn('increment')
  DepartmentID: number;

  @Column({ unique: true, length: 50 })
  DepartmentName: string;

  @Column({ nullable: true, length: 255 })
  Description: string;

  @CreateDateColumn()
  created_at: Date;
}
