import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('departments')
export class DepartmentOrmEntity {
  @PrimaryGeneratedColumn()
  DepartmentID: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Name: string;

  @Column({ type: 'varchar', nullable: true })
  Description: string;

  @Column({ type: 'boolean', default: true })
  IsActive: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  UpdatedAt: Date;
}
