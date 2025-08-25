import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { DepartmentOrmEntity } from '../../../departments/infraestructure/repositories/department.orm.entity';

@Entity('provinces')
export class ProvinceOrmEntity {
  @PrimaryGeneratedColumn()
  ProvinceId: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  Name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  Description: string;

  @Column({ type: 'boolean', default: true })
  IsActive: boolean;

  @Column({ type: 'int', nullable: false })
  @Index()
  DepartmentId: number;

  @ManyToOne(() => DepartmentOrmEntity, (department) => department.DepartmentId, { nullable: false })
  @JoinColumn({ name: 'DepartmentId', referencedColumnName: 'DepartmentId' })
  department: DepartmentOrmEntity;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;  

  @DeleteDateColumn()
  DeletedAt: Date;
}
