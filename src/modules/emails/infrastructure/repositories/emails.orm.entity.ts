import {Entity,
  Column,PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm'

@Entity('emails')
export class EmailEntity {
  @PrimaryGeneratedColumn()
  EmailID: number

  @Column()
  UserID:number

  @Column()
  Subject:string

  @Column()
  Body:string

  @CreateDateColumn()
  SentAt: Date

}