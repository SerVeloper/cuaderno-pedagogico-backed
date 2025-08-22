import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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
