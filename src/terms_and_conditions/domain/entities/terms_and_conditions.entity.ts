import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../../auth/domain/entities/user.entity';

@Entity('terms_and_conditions')
export class TermsAndConditions {
  @PrimaryGeneratedColumn('increment')
  TnCID: number;

  @Column()
  UserID: number;


  @Column({ length: 50 })
  Version: string;

  @CreateDateColumn()
  CreatedAt: Date;

}
