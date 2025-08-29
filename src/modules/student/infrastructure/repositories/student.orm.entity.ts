import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { Gender } from '../../domain/entities/gender';
import { LevelOrmEntity } from '../../../levels/infrastructure/repositories/level.orm.entity';


@Entity('student')
export class StudentOrmEntity {

  @PrimaryGeneratedColumn()
  StudentId: number;

  @Column({ type: 'varchar', length: 100 })
  @Index()
  FirstName: string;

  @Column({ type: 'varchar', length: 100 })
  @Index()
  LastName: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  @Index()
  IdentityNumber: string;

  @Column({
    type: 'enum',
    enum: Gender
  })
  Gender: Gender;


  @Column({ type: 'date' })
  BirthDate: Date;

  @Column({ type: 'varchar', length: 255 })
  Address: string;

  @Column({ type: 'varchar', length: 20 })
  Phone: string;

  @Column({ type: 'varchar', length: 100 })
  GuardianName: string;

  @Column({ type: 'varchar', length: 20 })
  GuardianPhone: string;

  @Column({ type: 'int' })
  Level: number;

  @Column({ type: 'int' })
  Course: number;

  @Column({ type: 'int' })
  Section: number;

  @ManyToOne(() => LevelOrmEntity, (level) =>level.LevelId)
  @JoinColumn({ name: 'Level', referencedColumnName: 'LevelId' })
  level: LevelOrmEntity;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt: Date;
}