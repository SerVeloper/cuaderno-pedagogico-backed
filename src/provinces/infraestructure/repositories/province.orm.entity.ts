import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { DepartmentOrmEntity } from '../../../departments/infraestructure/repositories/department.orm.entity';

@Entity('provinces')
export class ProvinceOrmEntity {
  @PrimaryGeneratedColumn()
  province_id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'int', nullable: false })
  @Index()
  department_id: number;

  @ManyToOne(() => DepartmentOrmEntity, (department) => department.DepartmentID, { nullable: false })
  @JoinColumn({ name: 'department_id', referencedColumnName: 'DepartmentID' })
  department: DepartmentOrmEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
