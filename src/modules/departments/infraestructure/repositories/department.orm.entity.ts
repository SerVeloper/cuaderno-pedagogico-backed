import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('departments')
export class DepartmentOrmEntity {
  @PrimaryGeneratedColumn({ name: 'DepartmentId' })
  DepartmentId: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  Description: string;

  @Column({ type: 'boolean', default: true })
  IsActive: boolean;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt: Date;
}
