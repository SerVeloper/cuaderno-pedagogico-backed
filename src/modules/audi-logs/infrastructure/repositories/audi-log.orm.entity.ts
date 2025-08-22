import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { AudiLog } from '../../domain/entities/audi-log.entity';

@Entity('audi_logs')
export class AudiLogOrmEntity implements AudiLog {
  @PrimaryGeneratedColumn()
  AudiLogID: number;

  @Column()
  UserID: number;

  @Column()
  Action: string;

  @Column()
  Details: string;

  @Column()
  IPAddress: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @UpdateDateColumn()
  DeletedAt: Date | null;
}
