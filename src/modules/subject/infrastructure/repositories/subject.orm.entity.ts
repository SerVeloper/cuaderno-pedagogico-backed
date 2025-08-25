import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EvaluationType } from '../../domain/entities/evaluation-type';

@Entity('subject')
export class SubjectOrmEntity {
  @PrimaryGeneratedColumn({ name: 'SubjectId' }) // Mapear a nombre de columna
  SubjectId: number;

  @Column({ name: 'Name', type: 'varchar', length: 255 })
  Name: string;

  @Column({ name: 'LevelId', type: 'int' })
  LevelId: number;

  @Column({
    name: 'EvaluationType',
    type: 'enum',
    enum: EvaluationType
  })
  EvaluationType: EvaluationType;

  @CreateDateColumn({ name: 'CreatedAt' })
  CreatedAt: Date;

  @UpdateDateColumn({ name: 'UpdatedAt' })
  UpdatedAt: Date;

  // Preparado para relación futura con Level
  // @ManyToOne(() => LevelOrmEntity)
  // @JoinColumn({ name: 'LevelId' })
  // level: LevelOrmEntity;
}