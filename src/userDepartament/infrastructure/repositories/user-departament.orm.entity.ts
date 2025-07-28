import { Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
 } from 'typeorm'

 @Entity('user_departament')
 export class UserDepartamentEntity {
  @PrimaryGeneratedColumn()
  UserDepartamentID: number

  @Column()
  UserID: number

  @Column()
  DepartamentID: number

  @CreateDateColumn()
  createdAt: Date
 }