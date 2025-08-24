import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('period')
export class PeriodEntity {
  @PrimaryGeneratedColumn()
  PeriodID: number;

  @Column()
  Name: string;

  @Column()
  StartDate: Date;

  @Column()
  EndDate: Date;

  @Column()
  Year: number;

  @CreateDateColumn()
  CreatedAt: Date;
}
