import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('levels')
export class LevelOrmEntity {
  @PrimaryGeneratedColumn()
  LevelId: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  Description: string;

  @Column({ type: 'boolean', default: true })
  IsActive: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt: Date;
}
