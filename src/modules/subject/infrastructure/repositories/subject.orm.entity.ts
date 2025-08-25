import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EvaluationType } from '../../domain/entities/evaluation-type';
import { LevelOrmEntity } from 'src/modules/levels/infrastructure/repositories/level.orm.entity';

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

  @ManyToOne(() => LevelOrmEntity, (level) => level.LevelId, { nullable: false })
  @JoinColumn({ name: 'LevelId', referencedColumnName: 'LevelId' })
  level: LevelOrmEntity;
}