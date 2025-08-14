import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('dimension')
export class DimensionOrmEntity {
  @PrimaryGeneratedColumn()
  DimensionID: number;

  @Column()
  Name: string;

  @Column()
  Description: string;

  @Column()
  SubjectID: number;

  @Column()
  CourseID: number;

  @Column({ default: true })
  IsActive: boolean;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}